/**
 * Created by thinlt on 3/24/2016.
 */
/**
 * Rewrite tinyMCE to add html5 tag in editor
 */
if( window.tinyMceWysiwygSetup ) {
    tinyMceWysiwygSetup.prototype.originalGetSettings = tinyMceWysiwygSetup.prototype.getSettings;
    tinyMceWysiwygSetup.prototype.getSettings = function( mode ) {
        var settings = this.originalGetSettings( mode );
        //makes "placeholder" a valid element for inputs
        settings.extended_valid_elements = 'input[id|type|accept|alt|checked|disabled|maxlength|name|readonly|size|src|value|placeholder|required|class|style],';
        settings.extended_valid_elements += 'textarea[id|class|name|cols|rows|style|title|value|disabled|placeholder],';
        settings.extended_valid_elements += 'session[id|class|style|src|alt|title],';
        settings.extended_valid_elements += 'header[id|class|style|src|alt|title],';
        settings.extended_valid_elements += 'nav[id|class|style|src|alt|title],';
        // config element svg
        settings.extended_valid_elements += 'svg[id|class|width|height|viewbox|version|xmlns|href|xmlns::href|xmlns::xlink|baseprofile|x|y|preserveaspectratio|contentscripttype|contentstyletype],';
        settings.extended_valid_elements += 'animate[id|class|style|attributetype|attributename|from|to|dur|repeatcount],';
        settings.extended_valid_elements += 'animatemotion[id|class|style|dur|repeatcount],';
        settings.extended_valid_elements += 'animatetransform[id|class|style|attributetype|attributename|from|to|type|dur|repeatcount],';
        settings.extended_valid_elements += 'audio[id|class|style|autoplay|buffered|controls|loop|muted|played|preload|src|volumel],';
        settings.extended_valid_elements += 'canvas[id|class|width|height|style],';
        settings.extended_valid_elements += 'circle[id|class|cx|cy|r|stroke|stroke-width|fill],';
        settings.extended_valid_elements += 'clippath[id|class|style],';
        settings.extended_valid_elements += 'color-profile[id|class|style|local|name|rendering-intent|xlink::href],';
        settings.extended_valid_elements += 'defs[id|class|style],';
        settings.extended_valid_elements += 'desc[id|class|style],';
        settings.extended_valid_elements += 'discard[id|class|style|begin|href],';
        settings.extended_valid_elements += 'ellipse[id|class|style|offset|x|y|x1|y1|x2|y2|cx|cy|rx|ry|fill],';
        settings.extended_valid_elements += 'feblend[id|class|style|in|in2|mode],';
        settings.extended_valid_elements += 'fecolormatrix[id|class|style|in|type|values],';
        settings.extended_valid_elements += 'fecomponenttransfer[id|class|style|in],';
        settings.extended_valid_elements += 'fecomposite[id|class|style|in|in2|operator|k1|k2|k3|k4|result],';
        settings.extended_valid_elements += 'feconvolvematrix[id|class|style|in|order|kernelmatrix|divisor|bias|targetx|targety|edgemode|kernelunitlength|preservealpha],';
        settings.extended_valid_elements += 'fediffuselighting[id|class|style|in|surfacescale|diffuseconstant|kernelunitlength|result|lighting-color],';
        settings.extended_valid_elements += 'fedisplacementmap[id|class|style|in|in2|scale|xchannelselector|ychannelselector],';
        settings.extended_valid_elements += 'fedistantlight[id|class|style|azimuth|elevation],';
        settings.extended_valid_elements += 'fedropshadow[id|class|style|in|stddeviation|dx|dy],';
        settings.extended_valid_elements += 'feflood[id|class|style|x|y|flood-color|flood-opacity],';
        settings.extended_valid_elements += 'fefunca[id|class|style|type|tablevalues|slope|intercept|amplitude|exponent|offset],';
        settings.extended_valid_elements += 'fefuncb[id|class|style|type|tablevalues|slope|intercept|amplitude|exponent|offset],';
        settings.extended_valid_elements += 'fefuncg[id|class|style|type|tablevalues|slope|intercept|amplitude|exponent|offset],';
        settings.extended_valid_elements += 'fefuncr[id|class|style|type|tablevalues|slope|intercept|amplitude|exponent|offset],';
        settings.extended_valid_elements += 'fegaussianblur[id|class|style|in|stddeviation|edgemode],';
        settings.extended_valid_elements += 'feimage[id|class|style|preserveaspectratio|xlink::href],';
        settings.extended_valid_elements += 'femerge[id|class|style],';
        settings.extended_valid_elements += 'femergenode[id|class|style|in],';
        settings.extended_valid_elements += 'femorphology[id|class|style|in|operator|radius],';
        settings.extended_valid_elements += 'feoffset[id|class|style|in|dx|dy],';
        settings.extended_valid_elements += 'fepointlight[id|class|style|x|y|z],';
        settings.extended_valid_elements += 'fespecularlighting[id|class|style|in|surfacescale|specularconstant|specularexponent|kernelunitlength|result|lighting-color],';
        settings.extended_valid_elements += 'fespotlight[id|class|style|x|y|z|pointsatx|pointsaty|pointsatz|specularexponent|limitingconeangle],';
        settings.extended_valid_elements += 'fetile[id|class|style|in],';
        settings.extended_valid_elements += 'feturbulence[id|class|style|basefrequency|numoctaves|seed|stitchtiles|type|result],';
        settings.extended_valid_elements += 'filter[id|class|style|x|y|width|height|filterres|filterunits|primitiveunits|xlink::href],';
        settings.extended_valid_elements += 'font[id|class|style|horiz-origin-x|horiz-origin-y|horiz-adv-x|vert-adv-y|vert-origin-x|vert-origin-y],';
        settings.extended_valid_elements += 'foreignobject[id|class|style|x|y|width|height|requiredextensions],';
        settings.extended_valid_elements += 'g[id|class|style|stroke|stroke-width|fill|fill-rule|transform|opacity],';
        settings.extended_valid_elements += 'hatch[id|class|style|x|y|pitch|rotate|hatchunits|hatchcontentunits|transform|href],';
        settings.extended_valid_elements += 'hatchpath[id|class|style|d|offset|stroke|stroke-width],';
        settings.extended_valid_elements += 'image[id|class|style|x|y|width|height|href|xlink::href|preserveaspectratio],';
        settings.extended_valid_elements += 'line[id|class|style|x1|y1|x2|y2|stroke-width|stroke|transform],';
        settings.extended_valid_elements += 'lineargradient[id|class|style|x1|y1|x2|y2|gradientunits|gradienttransform|spreadmethod|xlink::href],';
        settings.extended_valid_elements += 'marker[id|class|style|refx|refy|markerunits|markerwidth|markerheights|orient|viewbox],';
        settings.extended_valid_elements += 'mask[id|class|style|width|height|x|y|maskunits|maskcontentunits|stroke|stroke-width|fill|fill-rule|transform],';
        settings.extended_valid_elements += 'metadata[id|class|style],';
        settings.extended_valid_elements += 'mpath[id|class|style|xlink:href],';
        settings.extended_valid_elements += 'path[id|class|style|d|pathlength|mask|stroke|stroke-width|fill|fill-opacity|fill-rule|transform],';
        settings.extended_valid_elements += 'pattern[id|class|style|x|y|width|height|patternunits|patterncontentunits|patterntransform|preserveaspectratio|xlink::href],';
        settings.extended_valid_elements += 'polygon[id|class|style|points|width|height|mask|fill|fill-opacity|fill-rule|x|y|rx|ry],';
        settings.extended_valid_elements += 'polyline[id|class|style|points|fill|stroke],';
        settings.extended_valid_elements += 'radialgradient[id|class|style|r|cx|cy|fx|fy|fr|gradientunits|gradienttransform|spreadmethod|xlink::href],';
        settings.extended_valid_elements += 'rect[id|class|style|x|y|rx|ry|width|height],';
        settings.extended_valid_elements += 'set[id|class|style|to],';
        settings.extended_valid_elements += 'solidcolor[id|class|style|solid-color|solid-opacity],';
        settings.extended_valid_elements += 'stop[id|class|style|offset|x|y|x1|y1|x2|y2|stop-color|stop-opacity],';
        settings.extended_valid_elements += 'switch[id|class|style],';
        settings.extended_valid_elements += 'symbol[id|class|style|viewbox|preserveaspectratio],';
        settings.extended_valid_elements += 'text[id|class|style|offset|x|y|x1|y1|x2|y2|cx|cy|dx|dy|rx|ry|fill|font-size|font-family|transform|stroke|text-anchor|rotate|textlength|lengthadjust],';
        settings.extended_valid_elements += 'textPath[id|class|style|startoffset|method|spacing|href|xlink::href],';
        settings.extended_valid_elements += 'title[id|class|style|dir<ltr?rtl|lang],';
        settings.extended_valid_elements += 'tspan[id|class|style|x|y|dx|dy|rotate|textlength|lengthadjust],';
        settings.extended_valid_elements += 'use[id|class|style|x|y|width|height|href|xlink::href|fill],';
        settings.extended_valid_elements += 'video[id|class|style|src|width|height|autoplay|buffered|controls|crossorigin<anonymous?use-credentials|loop|muted|played|playsinline|preload|poster],';
        settings.extended_valid_elements += 'track[id|class|style|kind|src|srclang|label],';
        settings.extended_valid_elements += 'source[id|class|src|type],';
        settings.extended_valid_elements += 'view[id|class|style|viewbox|preserveaspectratio|zoomandpan|viewtarget],';
        //session[]header[]footer[]nav[]
        return settings;
    }
}