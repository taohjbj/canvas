/**
 * Created by acer on 2016/9/2.
 */
function Rotate(option) {
    this._init(option);
}
Rotate.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 50;
        this.outerRadius = option.outerRadius || 100;
        this.innerFill = option.innerFill || 'red';
        this.outerFill = option.outerFill || '#000';
        this.text = option.text || '';
        this.fontSize = option.fontSize || 15;
        this.group = new Konva.Group({
            x: this.x,
            y: this.y
        });
        var innerCircle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            fill:this.innerFill,
        })
        this.group.add( innerCircle );
        var outerCircle = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.outerFill,
            opacity: 0.5,
        })
        this.group.add(outerCircle);
        var text = new Konva.Text({
            x:0 - this.outerRadius, 
            y:0 - this.fontSize / 2,
            width:this.outerRadius * 2,
            align:'center',
            text:this.text,
            fontSize:this.fontSize,
            fill:'#369'
        })
        this.group.add(text);
    },
    addToLayerOrGroup : function (arg) {
        arg.add(this.group);
    }

}












