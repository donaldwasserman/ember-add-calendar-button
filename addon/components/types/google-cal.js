import Base from '../button-base';
import layout from '../../templates/components/types/google-cal';
import {get} from '@ember/object';

export default Base.extend({
  layout,
  baseUrl: 'https://www.google.com/calendar/render',
  generateHref({start = '', end = '', location = '', title = '', description = ''}) {
    let data = {
      dates: `${start}/${end}`,
      details: description,
      text: title,
      location,
    }
    let string = this._toQString(data)
    return encodeURI(`${get(this, 'baseUrl')}?action=TEMPLATE&${string}&sprop=&sprop=name:`)
  }
});
