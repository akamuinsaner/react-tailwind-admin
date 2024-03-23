import { Point, LegendOptions } from 'chart.js/auto';

export const DefaultLegendOption: LegendOptions<any> = {
  /**
   * Is the legend shown?
   * @default true
   */
   display: true,
   /**
    * Position of the legend.
    * @default 'top'
    */
   position: 'top',
   /**
    * Alignment of the legend.
    * @default 'center'
    */
   align: 'end',

   /**
    * Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.
    * @default true
    */
   fullSize: true,
   /**
    * Legend will show datasets in reverse order.
    * @default false
    */
   reverse: false,

 
   labels: {
     /**
      * Width of colored box.
      * @default 40
      */
     boxWidth: 40,
     /**
      * Height of the coloured box.
      * @default fontSize
      */
     boxHeight: 10,
     /**
      * Padding between the color box and the text
      * @default 1
      */
     boxPadding: 1,
     /**
      * Color of label
      * @see Defaults.color
      */

     /**
      * Padding between rows of colored boxes.
      * @default 10
      */
     padding: 10,
     /**
      * If usePointStyle is true, the width of the point style used for the legend.
      */
     pointStyleWidth: undefined,
 
 
     /**
      * Override point style for the legend. Only applies if usePointStyle is true
      */
     pointStyle: false,
 
     /**
      * Text alignment
      */
     textAlign?: 'right',
 
     /**
      * Label style will match corresponding point style (size is based on the minimum value between boxWidth and font.size).
      * @default false
      */
     usePointStyle: false,
 
     /**
      * Label borderRadius will match corresponding borderRadius.
      * @default false
      */
     useBorderRadius: false,
 
     /**
      * Override the borderRadius to use.
      * @default undefined
      */
     borderRadius: undefined,
   },
   /**
    * true for rendering the legends from right to left.
    */
   rtl: true,
   /**
    * This will force the text direction 'rtl' or 'ltr' on the canvas for rendering the legend, regardless of the css specified on the canvas
    * @default canvas's default
    */
   textDirection: 'ltr',
 

};
