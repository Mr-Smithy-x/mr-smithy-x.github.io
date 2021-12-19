import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

export class ProjectItem extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {project} = this.props
        return (

            <div className="container-fluid col-md-6">
                <a href={project.link} style={{ 'textDecoration': 'none' }}>
                    <div className="col-md-12" style={{
                        height: 310,
                        backgroundColor: 'black',
                        backgroundImage: 'url(' + project.image + ')',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}/>

                    <div className="justify-content-end" style={{backgroundColor: '#EEE', 'padding': '8px'}}>
                        <p className="project-title">{project.title}</p>
                        <p>{project.type}:{project.filters}</p>
                    </div>
                </a>
                <br/>
            </div>
        );
    }
}

export default ProjectItem;