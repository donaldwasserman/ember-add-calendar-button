import Base from '../button-base';
import layout from '../../templates/components/types/ical-cal';

// Fastboot support
const doc = document || {URL: false}

export default Base.extend({
  layout,
  generateHref({start = '', end = '', location = '', title = '', description = ''}){
    let text = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          'URL:' + doc.URL,
          `DTSTART:${start}`,
          `DTEND:${end}`,
          `SUMMARY:${title}`,
          `DESCRIPTION:${description}`,
          `LOCATION:${location}`,
          'END:VEVENT',
          'END:VCALENDAR'
        ];

      return encodeURI(`data:text/calendar;charset=utf8,${text.join('\n')}`)
  }
});
