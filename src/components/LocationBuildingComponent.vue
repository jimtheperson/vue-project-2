<template>
  <div class="contentRowWrapper">
   <div class="locationInfoContainer">
      <v-expand-transition>
         <v-card v-if="_isSelected.id" elevation="6" style="border-right: 2px solid black; border-radius: 5px;">
            <v-card-item>
            <v-card-title>{{ _isSelected.title }}</v-card-title>
            <v-card-subtitle>placeholder for description</v-card-subtitle>
            </v-card-item>
            <v-card-text>placeholder for data, controls, etc</v-card-text>
            <v-card-actions>
            <v-btn variant="outlined" color="success" prepend-icon="mdi-check" text="Accept" @click="_locationStore.setActive(_isSelected)" />
            <v-btn variant="elevated" prepend-icon="mdi-close" text="Cancel" @click="_locationStore.setSelected({id: '', title: ''})" />
            </v-card-actions>
         </v-card>
      </v-expand-transition>
   </div>
   <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 21.05924 25.582183"
   version="1.1"
   class="buildingSVG"
   >
   <g id="groupFloor1" @click="_locationStore.setSelected(_floor1)">
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="layer3"
         inkscape:label="fillFloor1">
         <path
            style="stroke:none;stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 16.976421,25.58924 v -1.310194 l 7.920097,0.0136 -0.0136,1.224055 h -0.145072 l -0.145073,-0.07253 -0.725367,0.07254 -0.104272,0.113337 -1.813417,0.290147 -0.621094,-0.113338 -1.088051,0.07254 -1.885954,-0.07254 -0.07254,-0.145073 -1.305659,-0.07254"
            id="fillFloor1"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1' }"/>
      </g>
      <g
         inkscape:label="hotspotFloor1"
         id="g1017"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)"
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f1', hotspotFloorHide: _isSelected.id === 'b1f1' }">
         <path
            id="hotspotFloor1"
            d="m 16.976421,25.58924 v -1.310194 l 7.920097,0.0136 -0.0136,1.224055 h -0.145072 l -0.145073,-0.07253 -0.725367,0.07254 -0.104272,0.113337 -1.813417,0.290147 -0.621094,-0.113338 -1.088051,0.07254 -1.885954,-0.07254 -0.07254,-0.145073 -1.305659,-0.07254"
            style="stroke:none;stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="layer6"
         inkscape:label="pathFloor1"
         style="display:inline">
         <path
            sodipodi:nodetypes="cccc"
            style="stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;"
            d="m 16.66875,25.135416 -7.4083334,1e-6 -3.96875,-11.90625 H 3.96875"
            id="pathFloorLabel1"
            class="floorLabelPath"
            :class="{ floorLabelPathActive: _isSelected.id === 'b1f1' }"
            />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="layer7"
         inkscape:label="labelFloor1"
         style="display:inline">
         <text
            id="labelFloor1"
            y="26.031425"
            x="10.494185"
            style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;display:inline;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
            xml:space="preserve"><tspan
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
               y="26.031425"
               x="10.494185"
               id="tspan1486-2"
               sodipodi:role="line"
               v-if="_isSelected.id != 'b1f1'">
               {{ _floor1.title }}
            </tspan></text>
      </g>      
   </g>
   <g id="groupFloor4" @click="_locationStore.setSelected(_floor4)">
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="layer4"
         inkscape:label="fillFloor4">
         <path
            style="stroke:none;stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 16.967353,21.663192 0.0045,-1.196855 3.253171,-0.172274 1.767666,0.07254 2.600049,0.290148 h 0.290146 l -0.0136,1.237657 -2.878799,-0.213077 -0.285613,0.0091 -1.464334,-0.068 -1.976625,0.0272 z"
            id="fillFloor4"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f4' }"
            />
      </g>
      <g
         inkscape:label="hotspotFloor4"
         id="g1021"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)"
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f4', hotspotFloorHide: _isSelected.id === 'b1f4' }">
         <path
            id="hotspotFloor4"
            d="m 16.967353,21.663192 0.0045,-1.196855 3.253171,-0.172274 1.767666,0.07254 2.600049,0.290148 h 0.290146 l -0.0136,1.237657 -2.878799,-0.213077 -0.285613,0.0091 -1.464334,-0.068 -1.976625,0.0272 z"
            style="stroke:none;stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:label="pathFloor4"
         id="g1433"
         inkscape:groupmode="layer"
         style="display:inline">
         <path
            sodipodi:nodetypes="cccc"
            style="stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="M 16.66875,21.166667 H 9.2604166 l -3.96875,-7.9375 H 3.96875"
            id="pathFloorLabel4"
            class="floorLabelPath"
            :class="{ floorLabelPathActive: _isSelected.id === 'b1f4' }"
            />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         style="display:inline"
         inkscape:label="labelFloor4"
         id="g1484"
         inkscape:groupmode="layer">
         <text
            id="labelFloor4"
            y="22.062675"
            x="10.525677"
            style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;display:inline;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
            xml:space="preserve"><tspan
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
               y="22.062675"
               x="10.525677"
               id="tspan1486-3"
               sodipodi:role="line"
               v-if="_isSelected.id != 'b1f4'">{{ _floor4.title }}
            </tspan></text>
      </g>      
   </g>
   <g id="groupFloor17" @click="_locationStore.setSelected(_floor17)">
      <g
         transform="translate(-3.96875,-0.44924247)"
         style="display:inline"
         inkscape:groupmode="layer"
         id="layer5"
         inkscape:label="fillFloor17">
         <path
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="m 16.963935,14.834209 v -0.584827 l 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.445213,0.738901 0.0074,0.630228 -2.439046,-0.752567 -0.321881,0.126939 -1.468868,-0.285613 -1.849685,0.21761 -0.119613,0.147196 -1.285785,0.174685"
            id="fillFloor17"
            sodipodi:nodetypes="ccccccccccccccc"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f17' }"            
            />
      </g>
      <g
         inkscape:label="hotspotFloor17"
         id="g1025"
         inkscape:groupmode="layer"
         style="display:inline"
         transform="translate(-3.96875,-0.44924247)"
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f17', hotspotFloorHide: _isSelected.id === 'b1f17' }">
         <path
            sodipodi:nodetypes="ccccccccccccccc"
            id="hotspotFloor17"
            d="m 16.963935,14.834209 v -0.584827 l 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.445213,0.738901 0.0074,0.630228 -2.439046,-0.752567 -0.321881,0.126939 -1.468868,-0.285613 -1.849685,0.21761 -0.119613,0.147196 -1.285785,0.174685"
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      </g>        
      <g
         transform="translate(-3.96875,-0.44924247)"
         style="display:inline"
         inkscape:groupmode="layer"
         id="g1458"
         inkscape:label="pathFloor17">
         <path
            style="stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="m 16.66875,14.552083 -2.116667,1.058334 H 9.2604166 l -3.96875,-2.38125 H 3.96875"
            id="pathFloorLabel17"
            sodipodi:nodetypes="ccccc"
            class="floorLabelPath"
            :class="{ floorLabelPathActive: _isSelected.id === 'b1f17' }"
            />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="g1490"
         inkscape:label="labelFloor17"
         style="display:inline">
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
               x="10.543531"
               y="16.531097"
               id="labelFloor17"><tspan
                  sodipodi:role="line"
                  id="tspan1486"
                  x="10.543531"
                  y="16.531097"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
                  v-if="_isSelected.id != 'b1f17'">{{ _floor17.title }}
               </tspan></text>
      </g>      
   </g>
   <g id="groupFloor18" @click="_locationStore.setSelected(_floor18)">
      <g
         transform="translate(-3.96875,-0.44924247)"
         style="display:inline"
         inkscape:label="fillFloor18"
         id="g975"
         inkscape:groupmode="layer">
         <path
            sodipodi:nodetypes="ccccccccccccccc"
            id="fillFloor18"
            d="m 16.975556,14.240819 -0.0055,-0.706952 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.439045,0.893107 0.0074,0.562377 -2.463719,-0.801913 -0.297208,0.120771 -1.450364,-0.297949 -1.891462,0.34849 -0.121013,0.111704 -1.249492,0.182917"
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f18' }"            
            />
      </g>
      <g
         inkscape:groupmode="layer"
         id="g1029"
         inkscape:label="hotspotFloor18"
         style="display:inline"
         transform="translate(-3.96875,-0.44924247)"        
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f18', hotspotFloorHide: _isSelected.id === 'b1f18' }">
         <path
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="m 16.975556,14.240819 -0.0055,-0.706952 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.439045,0.893107 0.0074,0.562377 -2.463719,-0.801913 -0.297208,0.120771 -1.450364,-0.297949 -1.891462,0.34849 -0.121013,0.111704 -1.249492,0.182917"
            id="hotspotFloor18"
            sodipodi:nodetypes="ccccccccccccccc" />
      </g>
      <g
         inkscape:label="pathFloor18"
         id="g987"
         inkscape:groupmode="layer"
         style="display:inline"
         transform="translate(-3.96875,-0.44924247)">
         <path
            sodipodi:nodetypes="ccccc"
            id="pathFloorLabel18"
            d="M 16.66875,14.022916 H 14.552083 9.2604165 L 5.2916666,13.229166 H 3.9687499"
            style="stroke-width:0.05291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            class="floorLabelPath"
            :class="{ floorLabelPathActive: _isSelected.id === 'b1f18' }"            
            />
      </g>
      <g
         style="display:inline"
         inkscape:label="labelFloor18"
         id="g993"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)">
         <text
            id="labelFloor18"
            y="14.856244"
            x="10.543531"
            style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
            xml:space="preserve"><tspan
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
               y="14.856244"
               x="10.543531"
               id="tspan989"
               sodipodi:role="line"
               v-if="_isSelected.id != 'b1f18'">{{ _floor18.title }}
         </tspan></text>
   </g>      
   </g>
   <g id="groupFloor19" @click="_locationStore.setSelected(_floor19)">
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="g979"
         inkscape:label="fillFloor19"
         style="display:inline">
         <path
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="m 16.97191,13.532595 0.0044,-0.726579 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.434683,0.904011 0.0027,0.709368 -2.451537,-0.888873 -0.318797,0.114603 -1.431859,-0.31337 -1.911367,0.322469 -0.0934,0.09785 -1.267016,0.190891"
            id="fillFloor19"
            sodipodi:nodetypes="ccccccccccccccc"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f19' }"            
            />
      </g>
      <g
         style="display:inline"
         inkscape:label="hotspotFloor19"
         id="g1033"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)"         
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f19', hotspotFloorHide: _isSelected.id === 'b1f19' }">
         <path
            sodipodi:nodetypes="ccccccccccccccc"
            id="hotspotFloor19"
            d="m 16.97191,13.532595 0.0044,-0.726579 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.330949,-0.108805 2.434683,0.904011 0.0027,0.709368 -2.451537,-0.888873 -0.318797,0.114603 -1.431859,-0.31337 -1.911367,0.322469 -0.0934,0.09785 -1.267016,0.190891"
            style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         style="display:inline"
         inkscape:groupmode="layer"
         id="g997"
         inkscape:label="pathFloor19">
         <path
            style="stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="M 16.66875,13.229166 H 14.552083 9.2604165 5.2916666 3.9687499"
            id="pathFloorLabel19"
            sodipodi:nodetypes="ccccc"
            class="floorLabelPath"
            :class="{ floorLabelPathActive: _isSelected.id === 'b1f19' }"            
            />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="g1003"
         inkscape:label="labelFloor19"
         style="display:inline">
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
               x="10.543531"
               y="12.954587"
               id="labelFloor19"><tspan
                  sodipodi:role="line"
                  id="tspan999"
                  x="10.543531"
                  y="12.954587"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
                  v-if="_isSelected.id != 'b1f19'">{{ _floor19.title }}
               </tspan></text>
   </g>      
   </g>
   <g id="groupFloor21" @click="_locationStore.setSelected(_floor21)">
      <g
         style="display:inline"
         inkscape:label="fillFloor21"
         id="g983"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)">
            <path
               sodipodi:nodetypes="ccccccccccccccc"
               id="fillFloor21"
               d="m 17.0076,12.090487 0.0044,-0.726579 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.232257,-0.05946 2.43649,0.857348 -0.01836,0.537716 -2.426115,-0.781586 -0.224272,0.09169 -1.433861,-0.228778 -1.911367,0.322469 -0.0934,0.09785 -1.267016,0.190891"
               style="stroke:none;stroke-width:0.0724958;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
               class="fillInactive"
               :class="{ fillActive: _isSelected.id === 'b1f21' }"                
               />
      </g>
      <g
         transform="translate(-3.96875,-0.44924247)"
         inkscape:groupmode="layer"
         id="g1037"
         inkscape:label="hotspotFloor21"
         style="display:inline"
         :class="{ hotspotFloorShow: _isSelected.id !== 'b1f21', hotspotFloorHide: _isSelected.id === 'b1f21' }">
         <path
            style="stroke:none;stroke-width:0.07249583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
            d="m 17.0076,12.090487 0.0044,-0.726579 1.269392,-0.190409 0.0952,-0.104271 1.899554,-0.308281 1.437133,0.299214 0.232257,-0.05946 2.43649,0.857348 -0.01836,0.537716 -2.426115,-0.781586 -0.224272,0.09169 -1.433861,-0.228778 -1.911367,0.322469 -0.0934,0.09785 -1.267016,0.190891"
            id="hotspotFloor21"
            sodipodi:nodetypes="ccccccccccccccc" />
      </g>
      <g
         inkscape:label="pathFloor21"
         id="g1007"
         inkscape:groupmode="layer"
         style="display:inline"
         transform="translate(-3.96875,-0.44924247)">
            <path
               sodipodi:nodetypes="ccccc"
               id="pathFloorLabel21"
               d="M 16.66875,11.641666 H 14.552083 9.2604165 l -3.9687499,1.5875 H 3.9687499"
               style="stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
               class="floorLabelPath"
               :class="{ floorLabelPathActive: _isSelected.id === 'b1f21' }"               
               />
      </g>
      <g
         style="display:inline"
         inkscape:label="labelFloor21"
         id="g1013"
         inkscape:groupmode="layer"
         transform="translate(-3.96875,-0.44924247)">
            <text
               id="labelFloor21"
               y="11.349519"
               x="10.526085"
               style="font-style:normal;font-weight:normal;font-size:0.741384px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0185346"
               xml:space="preserve"><tspan
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto;stroke-width:0.0185346"
                  y="11.349519"
                  x="10.526085"
                  id="tspan1009"
                  sodipodi:role="line"
                  v-if="_isSelected.id != 'b1f21'">{{ _floor21.title }}
               </tspan></text>
      </g>       
   </g>  
  <g
     transform="translate(-3.96875,-0.44924247)"
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="building"
     style="display:inline">
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 16.976421,25.58924 V 2.8127245 l 1.30566,-0.7253666 V 1.7246745 l 1.95849,-1.23312314 C 21.40057,1.1567477 22.407187,1.53905 24.447698,3.828238"
       id="path850"
       sodipodi:nodetypes="cccccc" />
    <path
       style="stroke-width:0.0726507;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="m 24.447698,13.258005 0.07254,-0.07254 v -0.217611 l -0.145073,-0.07254 v -0.21761 l 0.145073,-0.07254 v -0.217611 l -0.145073,-0.07254 v -0.21761 l 0.145073,-0.07254 v -0.21761 l -0.145073,-0.07254 V 11.58964 l 0.145073,-0.07254 v -0.217611 l -0.145073,-0.07254 v -0.145074 l 0.145073,-0.07254 v -0.217611 l -0.145073,-0.07254 v -0.145035 l 0.145073,-0.07254 v -0.21761 l -0.145073,-0.07254 V 9.9938488 l 0.145073,-0.07254 v -0.21761 l -0.145073,-0.07254 v -0.14506 l 0.145073,-0.07254 v -0.217609 l -0.145073,-0.07254 v -0.145073 l 0.145073,-0.07254 V 8.6881958 L 24.375162,8.6156581 V 8.3980485 l 0.145073,-0.072537 V 8.1079017 L 24.375162,8.0353651 V 7.8902914 l 0.145073,-0.072537 V 7.6001453 l -0.145073,-0.072537 v -0.145073 l 0.145073,-0.072537 V 7.0923882 L 24.375162,7.0198517 V 6.8022414 l 0.145073,-0.072537 V 6.5120945 L 24.375162,6.439558 V 6.2219484 l 0.145073,-0.072537 V 5.9318016 L 24.375162,5.8592651 V 5.6416548 l 0.145073,-0.072537 V 5.2789714 h -0.07254 V 3.828238"
       id="path852"
       sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1"
       d="m 24.447698,13.258005 v 1.958491 h 0.145073 v 5.44025 h 0.290147 v 4.859957 h -0.145074 l -0.145073,-0.07254 -0.725366,0.07254 -0.07254,0.07254 -0.03173,0.0408 -1.813417,0.290146 -0.621095,-0.113338 -1.08805,0.07254 -1.885954,-0.07254 -0.04188,-0.07254 v 0 l -0.03066,-0.07254 -1.30566,-0.07254"
       id="path854"
       sodipodi:nodetypes="ccccccccccccccccccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 16.758811,24.283579 h 3.48176 1.015514 0.290146 3.48176"
       id="path856"
       sodipodi:nodetypes="ccccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="m 17.484177,25.58924 v -0.797903 l 0.43522,-10e-7 v 0.797904"
       id="path858"
       sodipodi:nodetypes="cccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="M 17.701788,24.791336 V 25.58924"
       id="path860" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="M 18.934911,25.806849 V 24.50119 h 0.725366 v 1.305659"
       id="path862"
       sodipodi:nodetypes="cccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="m 19.297594,24.50119 v 1.305659"
       id="path864" />
    <path
       sodipodi:nodetypes="cccc"
       id="path866"
       d="m 24.592771,25.444166 v -0.87044 h -0.725366 v 0.942977"
       style="display:inline;stroke-width:0.0544024;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       style="stroke-width:0.021761;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="M 17.121495,25.58924 V 3.7557015 l 0.217609,-0.072537 V 25.58924 h 0.145073 v -1.305661 h 0.07254 V 3.5902271 l 0.36268,-0.1314726 V 24.283579 h 0.07254 v 1.378197 H 18.13701 V 3.3816843 L 18.57223,3.2320775 V 25.806849 h 0.362684"
       id="path883"
       sodipodi:nodetypes="ccccccccccccccccc" />
    <path
       style="stroke-width:0.021761;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="M 19.225057,24.283579 V 3.0122007 L 19.877888,2.8059243 V 25.879386 l 0.362683,1e-6 0.0044,-23.1539658 0.285747,0.1371727 V 25.879386 h 0.290146 V 2.992933 l 0.290147,0.1269389 V 25.806849 h 0.217611 v -1.378196 l 0.621094,0.0091 v 1.482468 l 0.176808,-0.0408 1e-6,-1.450733 h 0.43522 v 1.378196 l 0.435219,-0.07254 v -1.30566 h 0.362684 v 1.30566"
       id="path885"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <path
       style="stroke-width:0.0360019;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="m 16.976421,24.428653 h 0.428849 0.07147 0.500323 0.14295 0.428848 1.64392 1.072121 0.428849 3.216364"
       id="path887"
       sodipodi:nodetypes="cccccccccc" />
    <path
       style="stroke-width:0.021761;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="M 21.473694,24.283579 V 3.2762789 l 0.21761,0.097472 V 24.283579 h 0.580294 v -9.57484 l 0.507756,0.145073 v 9.429767 h 0.580294 v -9.212157 l 0.362683,0.07254 v 9.13962 h 0.43522 v -8.994547 l 0.290147,0.07254 v 8.92201 h 0.290146 v -3.626833"
       id="path889"
       sodipodi:nodetypes="cccccccccccccccccc" />
    <path
       style="stroke-width:0.021761;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="M 22.634281,12.521011 V 4.9162881 l 0.290147,0.145073 v 7.5678579 l 0.21761,0.09177 V 4.0073129 l 0.290147,0.14054 v 8.6893581 l 0.217609,0.08696 V 4.2339906 l 0.290147,0.1405393 v 8.6706741 l 0.290147,0.120622 V 4.4946686"
       id="path891"
       sodipodi:nodetypes="cccccccccccccc" />
    <path
       style="stroke-width:0.0725365;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="M 18.282081,2.1598951 V 25.661776"
       id="path893" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="M 19.007448,1.2894546 V 24.283579"
       id="path895" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:square;stroke-linejoin:miter;stroke-opacity:1"
       d="M 19.587741,24.283579 V 0.92677126"
       id="path897" />
    <rect
       style="fill:#000000;fill-opacity:0.349398;stroke-width:0.0650763;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:0"
       id="rect899"
       width="0.29014695"
       height="12.160892"
       x="21.691305"
       y="12.122687"
       ry="0" />
    <g
       id="g922"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-0.66903511)">
      <path
         sodipodi:nodetypes="cccccccc"
         id="path901"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         id="path903"
         sodipodi:nodetypes="ccc" />
    </g>
    <g
       id="g922-4"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-1.3218653)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-2"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-6"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-3"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-1.9021589)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-4"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-1"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-1"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-2.4099153)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-1"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-9"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-0"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-2.9902089)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-5"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-4"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-9"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-3.5705018)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-8"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-19"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-5"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-4.223332)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-29"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-42"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-06"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-4.8036256)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-80"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-68"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-05"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-5.3839186)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-85"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-2"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-39"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-5.9642122)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-41"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-3"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-36"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-6.5445051)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-24"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-24"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-8"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-7.1247988)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-25"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-8"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-7"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-7.7050917)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 56.885416,46.831249 v -0.79375 -0.264583 l -1.852083,-0.529167 0.529166,-0.264583 2.116667,0.529167 v 1.5875 l -0.79375,-0.264584"
         id="path901-40"
         sodipodi:nodetypes="cccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-66"
         d="m 55.033334,46.83125 0.529166,-0.264584 2.116666,0.529167"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       id="g922-86"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-8.2853853)">
      <path
         style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 59.002083,47.624999 v -0.529166 l -2.38125,-0.79375 -1.852084,-0.529167 0.529167,-0.529167 4.497917,1.5875 v 1.058334"
         id="path901-249"
         sodipodi:nodetypes="ccccccc" />
      <path
         sodipodi:nodetypes="ccc"
         id="path903-92"
         d="m 55.033334,46.83125 0.529166,-0.264584 4.233333,1.322917"
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccccccc"
         id="path901-249-9"
         d="M 58.737498,45.376016 V 44.84685 l -2.116667,-1.058334 -1.852083,-0.79375 0.264584,-0.264583 4.497916,1.852083 V 45.6406"
         style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         style="display:inline;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 54.768749,44.582267 0.529166,-0.264584 4.233333,1.322917"
         id="path903-92-0"
         sodipodi:nodetypes="ccc" />
    </g>
    <g
       id="g1133"
       transform="matrix(0.27415435,0,0,0.27415435,6.6762124,-0.74157164)">
      <path
         id="path1098"
         d="m 56.885416,50.270833 1.322917,-1.322917"
         style="stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      <path
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
         d="M 57.15,51.329166 59.266666,49.2125"
         id="path1098-7" />
      <path
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
         d="M 58.208333,51.59375 59.53125,50.270833"
         id="path1098-6" />
    </g>
    <g
       id="g1133-5"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,7.9093369,-0.23381534)">
      <path
         style="stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
         d="m 56.885416,50.270833 1.322917,-1.322917"
         id="path1098-2" />
      <path
         id="path1098-7-3"
         d="M 57.15,51.329166 59.266666,49.2125"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      <path
         id="path1098-6-2"
         d="M 58.208333,51.59375 59.53125,50.270833"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    </g>
    <g
       id="g1133-7"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,6.6036759,0.34647836)">
      <path
         style="stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
         d="m 56.885416,50.270833 1.322917,-1.322917"
         id="path1098-0" />
      <path
         id="path1098-7-2"
         d="M 57.15,51.329166 59.266666,49.2125"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      <path
         id="path1098-6-4"
         d="M 58.208333,51.59375 59.53125,50.270833"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    </g>
    <g
       id="g1133-6"
       style="display:inline"
       transform="matrix(0.27415435,0,0,0.27415435,7.6191901,0.70916166)">
      <path
         style="stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
         d="m 56.885416,50.270833 1.322917,-1.322917"
         id="path1098-1" />
      <path
         id="path1098-7-5"
         d="M 57.15,51.329166 59.266666,49.2125"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
      <path
         id="path1098-6-24"
         d="M 58.208333,51.59375 59.53125,50.270833"
         style="display:inline;stroke-width:0.079375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    </g>
    <path
       sodipodi:nodetypes="cccccc"
       id="path1189-7"
       d="m 16.971887,20.466337 1.464709,-0.0952 1.788461,-0.07707 1.438298,0.06347 0.329368,0.0091 2.600048,0.290147"
       style="display:inline;stroke-width:0.0362684;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       style="display:inline;stroke-width:0.0362684;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="m 16.97932,14.825122 1.287855,-0.168511 0.09808,-0.153041 1.878126,-0.204384 1.445449,0.301794 0.312063,-0.142917 2.446802,0.758431"
       id="path1189-7-6"
       sodipodi:nodetypes="ccccccc" />
    <path
       sodipodi:nodetypes="ccccccc"
       id="path1189-7-6-4"
       d="m 16.991835,12.794066 1.256322,-0.175128 0.0912,-0.101676 1.897095,-0.327995 1.452712,0.307574 0.318627,-0.109892 2.439905,0.871064"
       style="display:inline;stroke-width:0.0362684;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       style="fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0725365;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="m 21.763841,11.734735 v -0.217609 l 0.145073,-0.07254 v 0.217611 l -0.145073,0.07254"
       id="path1254" />
    <path
       id="path1254-2"
       d="m 21.763841,11.081906 v -0.176808 l 0.145073,-0.05894 v 0.176808 l -0.145073,0.05894"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0653836;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       inkscape:transform-center-x="0.0090670794"
       inkscape:transform-center-y="-0.0055267994" />
    <path
       id="path1254-3"
       d="m 21.768375,10.503879 v -0.113905 l 0.145073,-0.03797 v 0.113905 l -0.145073,0.03797"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0524795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-5"
       d="m 21.763841,9.9938558 v -0.187009 l 0.145073,-0.06233 v 0.187009 l -0.145073,0.06233"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0672432;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-51"
       d="m 21.763841,9.4123088 v -0.184369 l 0.145073,-0.06146 v 0.184368 l -0.145073,0.06146"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0667667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-4"
       d="M 21.763841,8.8337268 V 8.6147415 l 0.145073,-0.072995 v 0.2189853 l -0.145073,0.073"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0727657;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-7"
       d="M 21.763841,8.1804389 V 8.0053303 l 0.145073,-0.058372 v 0.1751086 l -0.145073,0.058372"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0650686;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-32"
       d="M 21.763841,7.6001453 V 7.4097365 l 0.145073,-0.063469 v 0.1904088 l -0.145073,0.063469"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0678518;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-36"
       d="M 21.763841,7.0198517 V 6.8362431 l 0.145073,-0.061199 v 0.1836085 l -0.145073,0.061199"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0666291;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-29"
       d="m 21.763841,6.4395587 v -0.188709 l 0.145073,-0.062905 v 0.1887091 l -0.145073,0.062905"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0675481;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-1"
       d="M 21.763841,5.8592651 V 5.6858569 l 0.145073,-0.057801 v 0.1734082 l -0.145073,0.057801"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.064752;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-6"
       d="M 21.763841,5.2789714 V 5.1055632 l 0.145073,-0.057801 v 0.1734083 l -0.145073,0.057801"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.064752;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-39"
       d="M 21.763841,4.6986785 V 4.5116699 l 0.145073,-0.062334 v 0.1870086 l -0.145073,0.062334"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0672432;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       id="path1254-42"
       d="M 21.691304,4.2634586 V 3.9370364 L 21.836377,3.8282295 V 4.154651 l -0.145073,0.1088076"
       style="display:inline;fill:#000000;fill-opacity:0.457831;stroke:none;stroke-width:0.0888403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
    <path
       style="stroke-width:0.0362684;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
       d="m 16.976421,3.7965035 1.30566,-0.4714881 1.924422,-0.6188284 4.20946,1.8700856"
       id="path1343"
       sodipodi:nodetypes="cccc" />
    <path
       style="fill:#000000;fill-opacity:0.35;stroke:none;stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 21.328621,25.806849 0.621096,0.113338 0.03174,-1.636608 -0.652831,0.01044 z"
       id="path1345"
       sodipodi:nodetypes="ccccc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 17.184492,3.7207596 V 2.7205819"
       id="path1349" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 17.415303,2.5699144 V 3.6310005"
       id="path1351" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 17.610851,2.4513033 V 3.5668861"
       id="path1353" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 17.809604,2.3423093 V 3.4963612"
       id="path1355" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 18.034003,2.2301102 V 3.4033955"
       id="path1357" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 18.476388,1.6017932 V 3.2552229"
       id="path1359"
       sodipodi:nodetypes="cc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 18.697582,1.4607427 V 3.1837586"
       id="path1361"
       sodipodi:nodetypes="cc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 19.284225,1.095293 V 2.9928109"
       id="path1363"
       sodipodi:nodetypes="cc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 19.877888,2.8059243 V 0.72729506"
       id="path1365" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 20.240571,0.49155136 0.0044,2.23386984"
       id="path1367"
       sodipodi:nodetypes="cc" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 20.460716,0.60482136 V 2.8039305"
       id="path1393" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 20.787697,0.80357436 V 2.944981"
       id="path1395" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 21.252524,1.06003 V 3.159763"
       id="path1397" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 21.771846,1.393423 V 3.3937784"
       id="path1399" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 22.198204,1.6883477 V 3.5861203"
       id="path1401" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 22.70791,2.0986768 V 3.8105194"
       id="path1403" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 23.153502,2.5057999 V 4.0156843"
       id="path1405" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 23.531775,2.8648383 V 4.185586"
       id="path1407" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 23.845933,3.1918195 V 4.3202253"
       id="path1409" />
    <path
       style="stroke-width:0.0725365px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 24.160091,3.5284177 V 4.4548646"
       id="path1411" />
  </g>
   </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocationStore } from '../stores/LocationStore'

const _locationStore = useLocationStore()
const { _locations, _isSelected } = storeToRefs(_locationStore)
const _floor1 = ref(_locations.value[0].floors![0])
const _floor4 = ref(_locations.value[0].floors![1])
const _floor17 = ref(_locations.value[0].floors![2])
const _floor18 = ref(_locations.value[0].floors![3])
const _floor19 = ref(_locations.value[0].floors![4])
const _floor21 = ref(_locations.value[0].floors![5])

</script>

<style>
.locationInfoContainer {
   height: 100%;
}
.buildingSVG {
  min-width: 400px;
  min-height: 500px;
  max-height: 800px;
  height: calc(95vh - 65px);
  fill: none;
  stroke: #000000;
  /* border: 1px solid red; */
}
.fillInactive {
  stroke: none;
  stroke-width: 0.264583;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
}
.fillActive {
  fill: #e7d586;
}
.hotspotFloorShow {
   fill: #000000;
   opacity: .085;
}
.hotspotFloorHide {
   opacity: 0;
}
.floorLabelPath {
  stroke-dasharray: 50;
  stroke-dashoffset: 44;
}
.floorLabelPathActive {
  animation: pathActive .75s ease-in-out forwards;
}
.floorLabelPathInactive {
  animation: pathInactive .3s ease-in-out forwards;
}
@keyframes pathActive {
0% {
  stroke-dashoffset: 44;
}
100% {
  stroke-dashoffset: 0;
}
}
@keyframes pathInactive {
0% {
  stroke-dashoffset: 0;
}
100% {
  stroke-dashoffset: 44;
}
}
@keyframes infoActive {
   0% {
      transform: translate()
   }
   100% {

   }
}
</style>
