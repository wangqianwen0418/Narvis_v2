import * as React from "react";

export interface ViewProps { heading: string; body: string; height: number}

export default class View extends React.Component<ViewProps, undefined> {
    render() {
        return <div className='panel' style={{height: `${this.props.height}vh`}}>
            <div className='panel-heading'>
                {this.props.heading}
            </div>
            <div className='panel-body'>
                {this.props.body}
            </div>
        </div>
    }
}