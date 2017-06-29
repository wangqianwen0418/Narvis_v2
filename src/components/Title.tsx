import * as React from "react";

export interface TitleProps { title: string; }

export const Title = (props: TitleProps) => <div
    style={{ 
        backgroundColor: 'white', 
        height: '6vh',
        margin: '0px',
        padding: '5px',
        fontSize: '40px' }}>
    {props.title}
</div>