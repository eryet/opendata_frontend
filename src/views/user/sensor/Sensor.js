import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link, useRouteMatch } from 'react-router-dom';

// component
import AddToGroup from './AddToGroup';

// api
import GatewayDetailAPI from '../../../fakeapi/GatewayDetailAPI';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'block'
	},
	gateway_card: {
		margin: 30
	},
	header: {
		fontSize: '3em'
	},
	table: {
		minWidth: 650
	},
	listtext: {
		flex: 0.3
	},
	listtextlabel: {
		flex: 0.3,
		fontWeight: 'bold'
	},
	listitem: {
		paddingTop: '20px',
		paddingBtm: '20px'
	}
}));

// sensor table with all sensor name, hyperlinked
// uncomplete

const Sensor = () => {
	let { id } = useParams();
	const classes = useStyles();

	return (
		<>
			<h1>This page is Sensor Page</h1>
			<h1>Sensor Detail</h1>
			<Card className={classes.root}>
				<CardContent>
					<Paper elevation={0}>
						<Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
							<List component="nav" aria-label="profile">
								<ListItem
									button
									divider
									alignItems="flex-start"
									className={classes.listitem}
								>
									<ListItemText
										className={classes.listtext}
										secondary="USERNAME"
									/>
									<ListItemText className={classes.listtext} primary={'text'} />

									<ListItemSecondaryAction>
										<NavigateNextIcon />
									</ListItemSecondaryAction>
								</ListItem>
								<ListItem
									button
									divider
									alignItems="flex-start"
									className={classes.listitem}
								>
									<ListItemText
										className={classes.listtext}
										secondary="ROLES"
									/>
									<ListItemText className={classes.listtext} primary={'test'} />
								</ListItem>
							</List>
						</Box>
						<Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
							<List component="nav" aria-label="profile">
								<ListItem
									button
									divider
									alignItems="flex-start"
									className={classes.listitem}
								>
									<ListItemText
										className={classes.listtext}
										primary="USERNAME"
										secondary={'test'}
									/>
									<ListItemSecondaryAction>
										<NavigateNextIcon />
									</ListItemSecondaryAction>
								</ListItem>
							</List>
						</Box>
					</Paper>
				</CardContent>
			</Card>
			<AddToGroup />
			<h1>{`render sensor number ${id}`}</h1>
		</>
	);
};

export default Sensor;
