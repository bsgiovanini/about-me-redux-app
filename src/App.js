import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/home';

import Main from './Main'

function mapStateToProps(state) {
  return {
    home : state.home
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
