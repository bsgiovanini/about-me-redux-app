import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/layout';

import Main from './Main'

function mapStateToProps(state) {
  return {
    layout : state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
