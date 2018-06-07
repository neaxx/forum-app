import React from 'react';
import {connect} from 'react-redux';
import {loadThreads} from '../ThreadsPage/actions';


class Threadspage extends React.Component {


	componentDidMount() {
    this.props.loadThreads();
	}

	render() {
    let threads = this.props.threads;
    if(!threads.length > 0){
      return <p>No hay datos disponibles</p>
    }else{
      return (
        <div>
            {
              threads.map( data => {
                return <div className='posts' key={data._id}>
                  <h1>{data.title}</h1>
                  <p>{data.body}</p>
                </div>
              })
            }
        </div>
      )

    }

	}


}


const mapStateToProps = state => {
  return {
    threads: state.threads.threads,
    isLoading: state.threads.isLoading,
    errorMessage: state.threads.errorMessage

  };

};

const mapDispatchToProps = dispatch => {
	return {
    loadThreads: () => dispatch(loadThreads())
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Threadspage);
