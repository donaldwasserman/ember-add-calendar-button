import Base from '../button-base';
import layout from '../../templates/components/types/google-cal';
import {get} from '@ember/object';
import moment from 'moment';

export default Base.extend({
  layout,
  baseUrl: 'https://calendar.google.com/calendar/r/eventedit',
  generateHref({startTime = '', endTime = '', location = '', title = '', description = ''}) {

    if (!moment.isMoment(startTime)) {
      startTime = moment(startTime);
    }
    if (!moment.isMoment(endTime)) {
      endTime = moment(endTime);
    }
    let start = startTime.format('YYYYMMDDTHHmmss');
    let end = endTime.format('YYYYMMDDTHHmmss');

    let data = {
      dates: `${start}/${end}`,
      details: description,
      text: title,
      location,
      ctz: 'America/New_York'
    }
    let string = this._toQString(data)
    return encodeURI(`${get(this, 'baseUrl')}?${string}&sf=true&output=xml`)
  }
});
