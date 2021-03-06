import { createSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Presenter from './presenter';
import { getUser } from '../../actions/getUser';
import { stateSelector } from '../../store/selectors';

const mapStateToProps = createSelector(
  [stateSelector],
  ({ user, isFetching, didInvalidate, didLostAuth }) => ({
    user,
    isFetching,
    didInvalidate,
    didLostAuth,
  })
);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUser,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(Presenter);
