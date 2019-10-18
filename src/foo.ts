import $ from 'jquery';

export default (text: string): JQuery<HTMLElement> => {
  return $('#app').html(text);
};
