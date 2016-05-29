function comSlider1019839() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider1019839 = null;
			
							this.jssor_slider1019839_starter = function (containerId) { 
							
            var _SlideshowTransitions = [ 
{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump},$Outside:true,$Round:{$Left:0.8,$Top:0.8}}
,{$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$JssorEasing$.$EaseOutQuad}
,{$Duration:1500,x:0.3,$During:{$Left:[0.6,0.4]},$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Outside:true,$Brother:{$Duration:1000,x:-0.3,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}}
,{$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$JssorEasing$.$EaseInExpo,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
,{$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$JssorEasing$.$EaseInCubic,$Top:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
				];								
							
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$AutoPlayInterval: 5000,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									},										
									
					$ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 2       //[Required] 0 Never, 1 Mouse Over, 2 Always
					},
				                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
						$Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
						$AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
						$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
						$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
						$SpacingX: 12,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
						$SpacingY: 12,                                   //[Optional] Vertical space between each item in pixel, default value is 0
						$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
					}						
									};

									self.jssor_slider1019839 = new $JssorSlider$(containerId, options);
								}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS1019839("#comSContainer1019839_").parent().width();
										if (parentWidth) {
											self.jssor_slider1019839.$ScaleWidth(Math.min(parentWidth, 500)); //parentWidth -> fully responsive
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function()
					{
				   jqCS1019839 = jQuery1019839.noConflict(false);jqCS1019839("#comslider_in_point_1019839").html('<div id="comSContainer1019839_" name="comSContainer1019839_" style="display: inline-block; text-align: left;  border:0px; width:500px; height:300px; position: relative; top: 0px; left: 0px;"><div u="slides" style="position: absolute; left: 0px; top: 0px; width:500px; height:300px; overflow: hidden;"><div><img u="image" src="comslider1019839/img/160529032658101.jpg"></img></div><div><img u="image" src="comslider1019839/img/160529032658102.png"></img></div><div><img u="image" src="comslider1019839/img/160529032658103.jpg"></img></div><div><img u="image" src="comslider1019839/img/160529032658104.jpg"></img></div></div><!-- Bullet Navigator Skin Begin --><!-- jssor slider bullet navigator skin 01 --><style>	/*	.	 div           (normal)	.jssorb1019839 div:hover     (normal mouseover)	.jssorb1019839 .av           (active)	.jssorb1019839 .av:hover     (active mouseover)	.jssorb1019839 .dn           (mousedown)	*/	.jssorb1019839 div, .jssorb1019839 div:hover, .jssorb1019839 .av {		filter: alpha(opacity=90);		opacity: 0.9;		overflow: hidden;		cursor: pointer;	border-radius: 24px;  border: 2px solid #DDDDDD;	background-color: transparent;		margin: 1px !important;	}	.jssorb1019839 div {		margin: 1px !important;		background-repeat:no-repeat;		background-position:center; 	}		.jssorb1019839 div:hover, 		.jssorb1019839 .av:hover {			background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 		}	.jssorb1019839 .av {		background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 	}</style><!-- bullet navigator container -->         <div u="navigator" class="jssorb1019839" style="position: absolute; bottom: 17px; left: 12px;">        	<!-- bullet navigator item prototype -->        	<div u="prototype" style="POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>        </div>				 <!-- Bullet Navigator Skin End -->	<!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora1019839l              (normal).jssora1019839r              (normal).jssora1019839l:hover        (normal mouseover).jssora1019839r:hover        (normal mouseover).jssora1019839ldn            (mousedown).jssora1019839rdn            (mousedown)*/.jssora1019839l, .jssora1019839r, .jssora1019839ldn, .jssora1019839rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora1019839l {background: transparent url("comslider1019839/imgnavctl/defback.png?1464517643") no-repeat; }.jssora1019839r {background: transparent url("comslider1019839/imgnavctl/defforward.png?1464517643") no-repeat; }.jssora1019839l:hover, .jssora1019839ldn {background: transparent url("comslider1019839/imgnavctl/defbackhover.png?1464517643") no-repeat; }.jssora1019839r:hover, .jssora1019839rdn {background: transparent url("comslider1019839/imgnavctl/defforwardhover.png?1464517643") no-repeat; } </style><!-- Arrow Left --><span u="arrowleft" class="jssora1019839l" style="margin-left:10px; width: 42px; height: 42px; top: 129px; left: 0px;"></span><!-- Arrow Right --><span u="arrowright" class="jssora1019839r" style="margin-left:-10px; width: 42px; height: 42px; top: 129px; left: 458px"></span><!-- Arrow Navigator Skin End -->	</div>');
                    jqCS1019839("#comslider_in_point_1019839 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider1019839_starter("comSContainer1019839_");
							
						jqCS1019839(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS1019839(window).bind("load", self.ScaleSlider);
						jqCS1019839(window).bind("resize", self.ScaleSlider);
						jqCS1019839(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop() == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider1019839 = new comSlider1019839();
objcomSlider1019839.include('comslider1019839/js/helpers.js', false);
objcomSlider1019839.include('comslider1019839/js/jquery-1.10.1.js', false);
objcomSlider1019839.include('comslider1019839/js/jquery-ui-1.10.3.effects.js', false);
objcomSlider1019839.include('comslider1019839/js/jssor.slider.min_2_0.js', true);
