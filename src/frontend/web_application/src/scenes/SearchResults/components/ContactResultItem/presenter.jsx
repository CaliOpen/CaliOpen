import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { WithTags, getTagLabel, getCleanedTagCollection } from '../../../../modules/tags';
import Link from '../../../../components/Link';
import Badge from '../../../../components/Badge';
import ContactAvatarLetter, { SIZE_SMALL } from '../../../../components/ContactAvatarLetter';
import { TextBlock } from '../../../../components/';
import { formatName } from '../../../../services/contact';
import Highlights from '../Highlights';
import './style.scss';

const CONTACT_NAME_PROPERTIES = ['title', 'name_prefix, name_suffix', 'family_name', 'given_name'];

class ContactResultItem extends PureComponent {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    term: PropTypes.string.isRequired,
    highlights: PropTypes.shape({}),
    contact: PropTypes.shape({}).isRequired,
    contact_display_format: PropTypes.string.isRequired,
  };
  static defaultProps = {
    term: '',
    highlights: null,
  };

  renderTitle() {
    const { term, contact, contact_display_format: format } = this.props;

    return (<Highlights term={term} highlights={formatName({ contact, format })} />);
  }

  renderTags() {
    const { i18n, contact } = this.props;

    return (
      <WithTags render={userTags =>
        contact.tags && getCleanedTagCollection(userTags, contact.tags).map(tag => (
          <span key={tag.name}>
            {' '}
            <Badge className="m-contact-result-item__tag">{getTagLabel(i18n, tag)}</Badge>
          </span>
        ))}
      />
    );
  }

  renderHighlights() {
    const { term, highlights } = this.props;

    const highlight = !highlights ? '' : Object.keys(highlights)
      .filter(contactProperty => CONTACT_NAME_PROPERTIES.indexOf(contactProperty) === -1)
      .map(contactProperty => highlights[contactProperty])
      .join(' ... ');

    return <Highlights term={term} highlights={highlight} />;
  }

  render() {
    const { term, contact } = this.props;

    return (
      <Link noDecoration className="m-contact-result-item" to={`/contacts/${contact.contact_id}`}>
        <div className="m-contact-result-item__contact-avatar">
          <ContactAvatarLetter isRound contact={contact} size={SIZE_SMALL} />
        </div>
        <TextBlock className="m-contact-result-item__col-title">
          {contact.name_prefix && (<span className="m-contact-result-item__contact-prefix"><Highlights term={term} highlights={contact.name_prefix} /></span>)}
          <span className="m-contact-result-item__contact-title">{this.renderTitle()}</span>
          {contact.name_suffix && (<span className="m-contact-result-item__contact-suffix">, <Highlights term={term} highlights={contact.name_suffix} /></span>)}
        </TextBlock>
        <TextBlock className="m-contact-result-item__col-highlights">
          {this.renderHighlights()}
        </TextBlock>
        <TextBlock className="m-contact-result-item__col-tags">
          {this.renderTags()}
        </TextBlock>
      </Link>
    );
  }
}

export default ContactResultItem;
