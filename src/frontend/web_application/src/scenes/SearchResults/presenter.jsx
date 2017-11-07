import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import SearchResultsLayout from '../../layouts/SearchResults';
import Link from '../../components/Link';
import Button from '../../components/Button';
import InfiniteScroll from '../../components/InfiniteScroll';
import MessageItem from './components/MessageItem';
import ContactItem from './components/ContactItem';

const LOAD_MORE_INTERVAL = 1000;

class SearchResults extends Component {
  static propTypes = {
    __: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    loadMore: PropTypes.func.isRequired,
    term: PropTypes.string,
    doctype: PropTypes.string,
    hasMoreByDoctype: PropTypes.shape({}),
    searchResults: PropTypes.shape({}),
    searchResultsPreview: PropTypes.shape({}),
  };
  static defaultProps = {
    term: undefined,
    doctype: undefined,
    hasMoreByDoctype: undefined,
    searchResults: undefined,
    searchResultsPreview: undefined,
  };
  state = {};

  componentDidMount() {
    const { term, doctype, search } = this.props;

    if (term) {
      search({ term });
      if (doctype) {
        this.initLoadMore({ doctype, term });
        search({ term, doctype });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { term, doctype, search } = this.props;
    if (nextProps.term && (nextProps.term !== term || nextProps.doctype !== doctype)) {
      this.initLoadMore({ doctype: nextProps.doctype, term: nextProps.term });
      search({ term: nextProps.term, doctype: nextProps.doctype });
    }
  }

  initLoadMore = ({ doctype, term }) => {
    this.debouncedLoadMore = debounce(
      () =>
        this.props.hasMoreByDoctype &&
        this.props.hasMoreByDoctype[doctype] &&
        this.props.loadMore({ term, doctype }),
      LOAD_MORE_INTERVAL,
      {
        leading: true,
        trailing: false,
      });
  }

  renderMessages(messages) {
    const { term } = this.props;

    return (
      <div>
        {messages.map(messageHit => (
          <MessageItem
            key={messageHit.document.message_id}
            message={messageHit.document}
            highlights={messageHit.highlights}
            term={term}
          />
        ))}
      </div>
    );
  }

  renderContacts(contacts) {
    const { term } = this.props;

    return (
      <div>
        {contacts.map(contactHit => (
          <ContactItem
            key={contactHit.document.contact_id}
            contact={contactHit.document}
            highlights={contactHit.highlights}
            term={term}
          />
        ))}
      </div>
    );
  }

  renderPreview() {
    if (!this.props.searchResultsPreview) {
      return null;
    }

    const { __, term, searchResultsPreview: {
      messages_hits: { total: nbMessages, messages },
      contact_hits: { total: nbContacts, contacts },
    } } = this.props;

    return (
      <div>
        {messages && (
          <div>
            {__('search-results.preview.nb-messages', { count: nbMessages, term })}
            {' '}
            <Link to={`/search-results?term=${term}&doctype=message`}>
              {__('search-results.actions.display-all')}
            </Link>
          </div>
        )}
        {messages && this.renderMessages(messages)}
        {contacts && (
          <div>
            {__('search-results.preview.nb-contacts', { count: nbContacts, term })}
            {' '}
            <Link to={`/search-results?term=${term}&doctype=contact`}>
              {__('search-results.actions.display-all')}
            </Link>
          </div>
        )}
        {contacts && this.renderContacts(contacts)}
      </div>
    );
  }

  renderResults() {
    if (!this.props.searchResults) {
      return null;
    }

    const {
      __,
      doctype,
      hasMoreByDoctype,
      searchResults: {
        messages_hits: { messages },
        contact_hits: { contacts },
      },
    } = this.props;

    switch (doctype) {
      case 'message':
        return (
          <div>
            <InfiniteScroll onReachBottom={this.debouncedLoadMore}>
              {this.renderMessages(messages)}
            </InfiniteScroll>
            {hasMoreByDoctype && hasMoreByDoctype.message && (
              <div className="s-search-results__load-more">
                <Button shape="hollow" onClick={this.debouncedLoadMore}>
                  {__('general.action.load_more')}
                </Button>
              </div>
            )}
          </div>
        );
      case 'contact':
        return (
          <div>
            <InfiniteScroll onReachBottom={this.debouncedLoadMore}>
              {this.renderContacts(contacts)}
            </InfiniteScroll>
            {hasMoreByDoctype && hasMoreByDoctype.contact && (
              <div className="s-search-results__load-more">
                <Button shape="hollow" onClick={this.debouncedLoadMore}>
                  {__('general.action.load_more')}
                </Button>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { term, doctype, searchResultsPreview } = this.props;

    return (
      <SearchResultsLayout
        className="s-search-results"
        term={term}
        searchResultsPreview={searchResultsPreview}
      >
        {doctype ? this.renderResults() : this.renderPreview()}
      </SearchResultsLayout>
    );
  }
}

export default SearchResults;
