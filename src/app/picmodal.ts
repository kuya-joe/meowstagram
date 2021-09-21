export class PicModal {
  id: string;
  image: string;
  caption: string;

  // shortcut (accept any Object) ->  constructor(values: Object = {})
  constructor(id: string = '', image: string = '', caption: string = '') {
    // Object.assign(this, values);
    this.id = id || Date.now().toString();
    this.image = image;
    this.caption = caption;
  }
}