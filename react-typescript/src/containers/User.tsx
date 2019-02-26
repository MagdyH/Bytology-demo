import * as  React from 'react';
import Form from '../components/Form';
import Grid from '../components/Grid';
import  PaginationList from '../components/PaginationList';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/formActions';
import * as API from '../API/UserAPI';

import Magdy from 'magdy-hussien/src';



const User = (props:any):JSX.Element=>
{
    
    return <div className="container">
                    <Form data={props.User} actions={props.actions} api={props.API} /> { /*data={this.state.appdate} onDataChange={this.handleDataChange}*/ }
                    <Grid data={props.User} actions={props.actions} api={props.API} Grid={props.Grid}/>
                    <PaginationList data={props.User} actions={props.actions} api={props.API} Grid={props.Grid}/>
                    <Magdy xml={'<ALEXA VER="0.9" URL="davidwalsh.name/" HOME="0" AID="="><SD TITLE="A" FLAGS="" HOST="davidwalsh.name"><TITLE TEXT="David Walsh Blog :: PHP, MySQL, CSS, Javascript, MooTools, and Everything Else"/><LINKSIN NUM="1102"/><SPEED TEXT="1421" PCT="51"/></SD><SD><POPULARITY URL="davidwalsh.name/" TEXT="7131"/><REACH RANK="5952"/><RANK DELTA="-1648"/></SD></ALEXA>'}/>
                </div>                
}

//
function mapStateToProps (state:any, ownProps:any){
  return{
      User : state.User,
      Grid: state.Grid

  };
}
  
function mapDispatcherToProps (dispatch:any){
  return{
      actions:bindActionCreators(userActions,dispatch),
      API:bindActionCreators(API,dispatch)

  };
}

export default connect(mapStateToProps,mapDispatcherToProps)(User);
