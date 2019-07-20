//import { asSequence } from "sequency"
import camelCase from "camelcase"

const tr = str => {
    return camelCase(str);
};

export default function(width = 12, height = 12){
    const mixin = {
        props: {},
        computed: {}
    };
    
    const breakpoints = [
        "xs",
        "s",
        "m",
        "l",
        "xl",
        "xxl",
    ];
    
    const classes = [
        "rw-full",
        "rh-full",
        "rfull",
        "w-full",
        "h-full",
        "full",
    ];
    
    for(const breakpoint of breakpoints){
        classes.push(
            `rw-full-${breakpoint}`,
            `rh-full-${breakpoint}`,
            `rfull-${breakpoint}`,
            `w-full-${breakpoint}`,
            `h-full-${breakpoint}`,
            `full-${breakpoint}`,
        );
    }
    
    for(let x = 1 ; x <= width ; ++x){
        classes.push(
            `rw${x}`,
            `w${x}`,
        );
            
        for(const breakpoint of breakpoints){
            classes.push(
                `rw${x}-${breakpoint}`,
                `w${x}-${breakpoint}`,
            );
        }
    }
                
    for(let y = 1 ; y <= height ; ++y){
        classes.push(
            `rh${y}`,
            `h${y}`,
        );
            
        for(const breakpoint of breakpoints){
            classes.push(
                `rh${y}-${breakpoint}`,
                `h${y}-${breakpoint}`,
            );
        }
    }
                
    
    classes.forEach(clazz => {
        mixin.props[tr(clazz)] = {
            type: Boolean,
            required: false,
            default: false
        };
    });
            
    mixin.computed["sizingClasses"] = function(){
        /*return asSequence(classes)
            .filter(clazz => !!this[clazz])
            .joinToString({
                separator: " ",
            });*/
        
        const c = classes
            .filter(clazz => !!this[tr(clazz)]);
        
        c.sort();
        return c.join(" ");
    };
    
    return mixin;
}