import React from 'react';
import Timeline from 'react-calendar-timeline/lib';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs';

const groups = [{ id: 3, title: 'group 1' }, { id: 2, title: 'group 2' }];

// const items = [
//   {
//     id: 1,
//     group: 3,
//     title: 'item 1',
//     start_time: moment(),
//     end_time: moment().add(1, 'hour'),
//   },
//   {
//     id: 2,
//     group: 2,
//     title: 'item 2',
//     start_time: moment().add(-0.5, 'hour'),
//     end_time: moment().add(0.5, 'hour'),
//   },
//   {
//     id: 3,
//     group: 3,
//     title: 'item 3',
//     start_time: moment().add(2, 'hour'),
//     end_time: moment().add(8, 'hour'),
//   },
// ];

class AdminSubTimeline extends React.Component {
  render() {
    if(this.props.subs.loading) {
      return (
        <div> Loading </div>
      );
    }

    const { subs } = this.props.subs;
    const groups = subs.map((sub) => {
      return { id: sub.id, title: sub.name };
    });

    const { jobs } = this.props.jobs;
    const items = jobs.map((job) => {
      const startTime = job.start_time.split(' ');
      const endTime = job.end_time.split(' ');
     return {
        id: job.id,
        group: job.fk_sub,
        title: job.subject,
        start_time: moment(`${job.start_date} ${startTime[0]}:00:00 ${startTime[1]}`, 'YYYY-MM-DD hh:mm:ss a'),
        end_time: moment(`${job.end_date} ${endTime[0]}:00:00 ${endTime[1]}`, 'YYYY-MM-DD hh:mm:ss a'),
        style:{ backgroundColor: 'purple' },
      };
    });

    return (
      <div>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          sidebarContent="Substitute Teachers"
          fullUpdate="false"
          style={{backgroundColor: 'lightgrey'}}
        />
      </div>
    );
  }
}

export default compose(
  graphql(GET_ALL_SUBS, {
    name: 'subs',
  }),
  graphql(GET_ALL_JOBS, {
    name: 'jobs',
  }),
)(AdminSubTimeline);
