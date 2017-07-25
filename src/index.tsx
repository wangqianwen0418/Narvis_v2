import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { GridList, GridTile } from 'material-ui/GridList';

import { Title } from "./components/Title";
import View from "./components/View";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};
const Main = () =>
    <MuiThemeProvider>
        <GridList cols={12}>
            <GridTile cols={2} rows={1}>
                <Title title='NarVis' />
            </GridTile>
            <GridTile cols={2} rows={1}>
                <View heading='AA' body='' height={45} />
            </GridTile>
            <GridTile cols={2} rows={1}>
                <View heading='AA' body='' height={45} />
            </GridTile>
            <GridTile cols={2} rows={1}>
                <View heading='AA' body='' height={70} />
            </GridTile>
            <GridTile cols={2} rows={1}>
                <View heading='AA' body='' height={20} />
            </GridTile>
        </GridList>
    </MuiThemeProvider>

ReactDOM.render(
    <Main />,
    document.getElementById("example")
);