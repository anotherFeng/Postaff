import React from 'react';
import {
  Typography,
  Paper,
  Card,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

class AdminLandingCharts extends React.Component {
  render() {
    const claimed = this.props.claimed;
    const unclaimed = this.props.unclaimed.length;
    const percentClaimed = Math.round((this.props.claimed / (this.props.claimed + this.props.unclaimed.length)) * 100);
    const percentFree = Math.round((15 / (26 + 15)) * 100);
    console.log(claimed, unclaimed);
    const claimData = {
      labels: [
        'Claimed',
        'UnClaimed',
      ],
      datasets: [{
        data: [claimed, unclaimed],
        backgroundColor: [
          '#0a00b6',
          '#9d46ff',
        ],
        hoverBackgroundColor: [
          '#0a00b6',
          '#36A2EB',
        ],
      }],
    };

    const options = {
      legend: {
        display: false,
      },
    };

    const freeSubs = {
      labels: [
        'Booked',
        'Free',
      ],
      datasets: [{
        data: [26, 15],
        backgroundColor: [
          '#0a00b6',
          '#9d46ff',
        ],
        hoverBackgroundColor: [
          '#0a00b6',
          '#36A2EB',
        ],
      }],
    };
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Grid container spacing={16} style={{ flexGrow: 1 }}>
          <Grid item xs={8} sm={6}>
            <Doughnut data={claimData} options={options} />
            <Typography variant="title" align="center">
              {percentClaimed}% Claimed
            </Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Doughnut data={freeSubs} options={options} />
            <Typography variant="title" align="center">
              {percentFree}% Subs Free
            </Typography>
          </Grid>
          {/* <Typography variant="subheading" gutterBottom>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Doughnut data={data} />
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            27
          </Grid>
        </Grid>
      </Typography>
      <Typography variant="subheading" gutterBottom>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            Stats
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            144
          </Grid>
        </Grid>
      </Typography> */}
        </Grid>
      </Paper>
    );
  }
}

export default AdminLandingCharts;
