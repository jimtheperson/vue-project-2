<template>
  <div class="contentRowWrapper">
    <div v-if="_isSelected.id" class="locationInfoContainer">
      <v-card v-if="_isSelected.id" elevation="6" style="margin-right: 20px">
        <v-card-item>
          <v-card-title>{{ _isSelected.title }}</v-card-title>
          <v-card-subtitle>placeholder for description</v-card-subtitle>
        </v-card-item>
        <!-- <v-card-text>placeholder for data, controls, etc</v-card-text> -->
        <v-sheet v-for="output in _outputs" :key="output.id" elevation="1" class="outputWrapper">
          <!-- <div class="rowFlexSpaceBetween"> -->
            <div class="rowFlexStart">
              <v-icon v-if="output.type === 'audio'" icon="mdi-speaker" />
              <v-icon v-else-if="output.type === 'video'" icon="mdi-television" />
              <v-icon v-else-if="output.type === 'audio-video'" icon="mdi-television-speaker" />
              <h3>
                {{ output.title }}
              </h3>
            </div>
            <!-- <div class="rowFlexSpaceBetween"> -->
              <!-- <div class="rowFlexEnd"> -->
                <v-select
                  v-for="source in output.source"
                  :key="source.id"
                  :label="source.title"
                  :items="source.items"
                />
              <!-- </div> -->
              <VolumeGroupComponent v-for="volume in output.volume" :key="volume.id" />
              <div v-if="output.control">
                <div v-for="control in output.control" :key="control.id">
                  <v-btn
                    v-if="control.type === 'button'"
                    :prepend-icon="control.icon"
                    :text="control.title"
                  />
                  <v-switch
                    v-else-if="control.type === 'toggle'"
                    :prepend-icon="control.icon"
                    :label="control.title"
                  />
                </div>
              </div>
            <!-- </div> -->
          <!-- </div> -->
        </v-sheet>
        <v-card-actions>
          <v-btn
            variant="outlined"
            color="success"
            prepend-icon="mdi-check"
            text="Accept"
            @click="_locationStore.setActive(_isSelected)"
          />
          <v-btn
            variant="elevated"
            prepend-icon="mdi-close"
            text="Cancel"
            @click="_locationStore.setSelected({ id: '', title: '' })"
          />
        </v-card-actions>
      </v-card>
    </div>

    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 57.686977 69"
      class="buildingSVG"
    >
      <title id="title1472">Floor 1 Plan</title>
      <defs>
        <linearGradient id="Gradient-1" x1="3%" y1="4%" x2="6%" y2="6%">
          <stop offset="0%" stop-color="grey" />
          <stop offset="50%" stop-color="white" />
        </linearGradient>

        <linearGradient id="repeat" xlink:href="#Gradient-1" spreadMethod="repeat" />
      </defs>
      <g
        transform="translate(-16.813022,-4.5515159)"
        style="display: inline"
        inkscape:label="Fills"
        id="layer5"
        inkscape:groupmode="layer"
      >
        <g
          inkscape:groupmode="layer"
          id="g2086"
          inkscape:label="entryOutdoorsFill"
          style="display: inline"
        >
          <rect
            style="
              stroke: none;
              stroke-width: 0.109524;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.109524, 0.219049;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            id="entryOutdoorsFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rEntryOutdoors' }"
            width="28.321323"
            height="6.7755251"
            x="20.376808"
            y="17.14402"
            transform="rotate(-15.130636)"
            ry="3.1607094"
          />
        </g>
        <g
          style="display: inline"
          inkscape:label="entryMezFill"
          id="g2078"
          inkscape:groupmode="layer"
        >
          <path
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 34.968315,37.071329 6.165412,-1.285096 1.115903,3.855941 4.688775,-0.524828 -1.37883,-4.991886 1.076016,-0.29595 3.139432,-0.844823 0.319606,0.814835 2.817302,-0.753444 -0.200177,-0.793008 7.551102,-2.040851 6.7623,1.140353 L 74,29.300737 V 9.1923881 L 52.812029,14.498899 51.28578,10.600857 28.112319,16.833727 24.052417,31.040584 Z"
            id="entryMezFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rEntryMez' }"
          />
        </g>
        <g
          style="display: inline"
          inkscape:label="hotelCorridorFill"
          id="layer7"
          inkscape:groupmode="layer"
        >
          <path
            id="hotelCorridorFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rCorridors' }"
            d="m 35.077806,37.048507 6.055921,-1.262274 1.115903,3.870017 0.04334,20.402344 -0.369395,8.665253 -6.335972,0.04415 -4.199325,3.367154 -3.918883,-4.840858 7.672824,-6.219983 -0.05466,-24.027834"
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <g inkscape:label="hotelElevFill" id="layer8" inkscape:groupmode="layer">
          <path
            sodipodi:nodetypes="ccccc"
            id="hotelElevFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rCorridors' }"
            d="m 41.984415,67.296676 0.307971,-7.224394 9.453344,0.02142 -0.01645,7.238016 z"
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <g inkscape:label="residentialElevFill" id="layer9" inkscape:groupmode="layer">
          <path
            id="residentialElevFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rCorridors' }"
            d="m 48.570302,60.086507 3.164055,0.0072 9.12642,0.0565 0.373598,-7.371282 H 48.591443 Z"
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <g inkscape:label="residentialCorridorFill" id="layer10" inkscape:groupmode="layer">
          <path
            id="residentialCorridorFill"
            class="fillInactive"
            :class="{ fillActive: _isSelected.id === 'b1f1rCorridors' }"
            d="m 60.839003,63.437675 0.0047,-3.287574 0.389954,-7.356773 0.107868,-20.023348 -1.08172,-2.567785 6.659693,1.132557 0.02364,28.684779 -0.16133,0.218652 v 3.230567 z"
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          style="display: inline"
          inkscape:label="ServiceAreaFill"
          id="layer3"
          inkscape:groupmode="layer"
        >
          <path
            sodipodi:nodetypes="ccccccccccccccccccccc"
            style="
              display: inline;
              fill: url(#repeat);
              stroke: #000000;
              stroke-width: 0.5;
              stroke-linecap: butt;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 31.355421,72.161532 4.226289,-3.393495 6.341864,-0.04419 v -1.414213 l 9.811107,0.0221 v -7.18156 h 9.126096 l -0.0221,3.33666 h 5.92202 l 0.0221,-3.402952 h 6.935341 V 96 l -18.87439,0.01563 -8.202864,-5.700951 -5.273174,1.829667 1.167161,3.727776 -2.261935,0.173162 -0.162599,-3.381689 C 37.176697,87.410101 33.408615,82.712903 29.618873,78.030144 l 3.809468,-3.191605 -2.077148,-2.683502"
            id="path1495"
          />
        </g>
      </g>
      <g
        transform="translate(-16.813022,-4.5515159)"
        style="display: inline"
        inkscape:label="Floor1"
        id="layer2"
        inkscape:groupmode="layer"
      >
        <path
          sodipodi:nodetypes="cccccccc"
          id="path1489"
          d="m 72,96 h 2 V 9 l -21.43103,5.56198 -1.182194,-3.988524 -23.334524,6.330815 -4.049291,14.10899 10.965354,6.058068"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 1;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cccccc"
          id="path1491"
          d="m 24,31 -3,-1 -1.757813,7.0625 -0.78125,-0.242188 c -1.396823,11.444918 -4.25071,19.025878 6.751839,32.277279 l 2.253903,-1.800913"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cccccccccc"
          id="path1493"
          d="m 27.444976,67.314019 6.156586,7.553168 -4.023437,3.195313 c 3.906084,4.508819 7.616454,9.180733 10.53125,14.515625 l 0.03906,3.46875 2.4375,-0.03125 -1.359375,-3.820313 5.34375,-1.929687 8.273438,5.75 L 72.078125,96"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 1px;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cccc"
          id="path1513"
          d="m 48,60.050912 0.568056,0.0039 0.02344,-7.292499 h 1.972165"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cc"
          id="path1515"
          d="M 45.582031,60.058594 H 42.292969"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1517"
          d="m 53.042969,52.765625 h 3.324218"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1519"
          d="m 58.82797,52.778892 h 2.414106"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1521"
          d="M 48.584781,54.851559 H 42.296875"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 48.875918,52.689183 0.0056,-5.21227"
          id="path1521-0"
        />
        <path
          id="path1521-0-0"
          d="m 54.731684,52.722328 0.0056,-5.21227"
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1553"
          d="M 42.293824,60.058594 V 53.209785"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1555"
          d="M 42.293824,48.989242 V 45.961941"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cccc"
          id="path1557"
          d="m 42.24963,41.818737 v -2.253903 l 18.406873,-1.756718 0.68501,5.126524"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cc"
          id="path1559"
          d="M 61.208931,52.778892 V 47.530834 H 42.293824"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1561"
          d="M 60.539062,44.570312 V 42.93464 h 0.802451 V 32.76998"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1563"
          d="M 60.492187,47.530834 V 46.757812"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="ccc"
          id="path1565"
          d="m 74,60.093028 -7.056875,-0.0091 v -8.023145"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1567"
          d="M 66.932076,49.707397 V 31.377863 l 3.94433,-1.071708"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1569"
          d="M 74,42.001038 H 66.932076"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cc"
          id="path1571"
          d="m 60.369241,30.560271 -0.162099,-0.53033"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: butt;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 57.128627,38.152789 -1.84656,-6.595031 4.953358,-1.324835"
          id="path1573"
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 55.289358,31.555808 -2.577604,0.697262 0.203125,0.804688 -2.851562,0.75 -0.242188,-0.835938 -1.007812,0.28125"
          id="path1575"
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="M 50.213861,34.304228 50.051763,33.773897"
          id="path1571-6"
          sodipodi:nodetypes="cc"
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="M 51.416987,38.687039 50.770513,36.37546"
          id="path1571-9"
          sodipodi:nodetypes="cc"
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 46.956049,39.108915 -1.396474,-4.983455 1.08105,-0.297335"
          id="path1571-66"
          sodipodi:nodetypes="cc"
        />
        <path
          sodipodi:nodetypes="cc"
          id="path1622"
          d="m 42.155717,39.542737 -1.02199,-3.756504"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1624"
          d="M 27.44106,67.317148 35.15625,61.09375 34.780815,36.946329"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1628"
          d="m 32.741349,63.041711 -5.2507,4.235437"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1630"
          d="m 34.666429,61.48886 0.489335,-0.426353 V 37.1875"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path1632"
          d="m 46.5,31.09375 -2.03125,0.59375 -2.484375,-9.304688 4.4375,-1.1875 -2.289063,-8.453125"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="ccc"
          id="path1634"
          d="m 35.471349,15.108883 0.98332,3.629447 c 0.138646,0.371428 0.353096,0.667053 0.668437,0.861786"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="ccc"
          id="path1636"
          d="M 41.987518,22.394583 41.664057,21.92031 c -0.334292,0.03708 -0.675027,0.01619 -1.038563,-0.209922"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 59.686814,27.902859 -0.53125,-1.875 -1.374263,0.372873 c -1.186991,0.287483 -1.63753,-0.263536 -2.010835,-0.90598 L 52.919941,14.877101"
          id="path1638"
          sodipodi:nodetypes="ccccc"
        />
        <path
          sodipodi:nodetypes="ccccc"
          id="path1655"
          d="m 73.119261,29.632194 0.596621,-0.165729 -1.856155,-6.872194 c 1.132368,-0.214854 1.892808,-0.830246 1.502601,-2.684796 l -2.596407,-9.63433"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="ccc"
          id="path1657"
          d="m 61.739261,18.009126 c -1.206558,0.385425 -1.565912,-0.129306 -1.845107,-0.729204 l -1.027515,-3.94433"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="ccc"
          id="path1659"
          d="m 65.727785,16.91532 c 0.965365,-0.176899 1.314052,-0.710822 1.160097,-1.535748 L 65.83827,11.479437"
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:nodetypes="cc"
          id="path1521-0-3"
          d="m 48.875956,47.529513 0.0056,-8.54893"
          style="
            display: inline;
            fill: none;
            stroke: #000000;
            stroke-width: 0.3;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          style="stroke-width: 0.00568306; fill: #000000"
          d="m 44.383385,58.917386 h 0.681968 v -0.96612 h 0.227323 v -0.625138 q 0,-0.187541 -0.133553,-0.321094 -0.133552,-0.133551 -0.321093,-0.133551 h -0.227322 q -0.187541,0 -0.321093,0.133551 -0.133552,0.133553 -0.133552,0.321094 v 0.625138 h 0.227322 z m 0.340984,-2.239128 q 0.130711,0 0.224481,-0.09377 0.09378,-0.09377 0.09378,-0.224481 0,-0.130711 -0.09378,-0.224481 -0.09377,-0.09377 -0.224481,-0.09377 -0.13071,0 -0.224481,0.09377 -0.09377,0.09376 -0.09377,0.224481 0,0.130711 0.09377,0.224481 0.09376,0.09377 0.224481,0.09377 z m 0.994537,0.534209 h 1.136613 l -0.568306,-0.90929 z m 0.568307,1.477597 0.568306,-0.90929 h -1.136613 z m -2.472134,0.85246 q -0.136394,0 -0.238689,-0.102293 -0.102293,-0.102293 -0.102293,-0.238689 v -3.409839 q 0,-0.130711 0.102293,-0.235848 0.102293,-0.105131 0.238689,-0.105131 h 3.409839 q 0.130711,0 0.235848,0.105131 0.105131,0.105131 0.105131,0.235848 v 3.409839 q 0,0.136394 -0.105131,0.238689 -0.105143,0.102293 -0.235848,0.102293 z m 0,-0.340984 h 3.409839 v -3.409839 h -3.409839 z m 0,0 v -3.409839 z"
          id="path1755"
        />
        <path
          id="path1755-7"
          d="m 50.658959,51.625343 h 0.681968 v -0.96612 h 0.227323 v -0.625138 q 0,-0.187541 -0.133553,-0.321094 -0.133552,-0.133551 -0.321093,-0.133551 h -0.227322 q -0.187541,0 -0.321093,0.133551 -0.133552,0.133553 -0.133552,0.321094 v 0.625138 h 0.227322 z m 0.340984,-2.239128 q 0.130711,0 0.224481,-0.09377 0.09378,-0.09377 0.09378,-0.224481 0,-0.130711 -0.09378,-0.224481 -0.09377,-0.09377 -0.224481,-0.09377 -0.13071,0 -0.224481,0.09377 -0.09377,0.09376 -0.09377,0.224481 0,0.130711 0.09377,0.224481 0.09376,0.09377 0.224481,0.09377 z m 0.994537,0.534209 h 1.136613 l -0.568306,-0.90929 z m 0.568307,1.477597 0.568306,-0.90929 H 51.99448 Z m -2.472134,0.85246 q -0.136394,0 -0.238689,-0.102293 -0.102293,-0.102293 -0.102293,-0.238689 V 48.49966 q 0,-0.130711 0.102293,-0.235848 0.102293,-0.105131 0.238689,-0.105131 h 3.409839 q 0.130711,0 0.235848,0.105131 0.105131,0.105131 0.105131,0.235848 v 3.409839 q 0,0.136394 -0.105131,0.238689 -0.105143,0.102293 -0.235848,0.102293 z m 0,-0.340984 h 3.409839 v -3.409839 h -3.409839 z m 0,0 v -3.409839 z"
          style="display: inline; stroke-width: 0.00568306; fill: #000000"
        />
        <path
          id="path1755-3"
          d="m 56.448396,51.713731 h 0.681968 v -0.96612 h 0.227323 v -0.625138 q 0,-0.187541 -0.133553,-0.321094 -0.133552,-0.133551 -0.321093,-0.133551 h -0.227322 q -0.187541,0 -0.321093,0.133551 -0.133552,0.133553 -0.133552,0.321094 v 0.625138 h 0.227322 z m 0.340984,-2.239128 q 0.130711,0 0.224481,-0.09377 0.09378,-0.09377 0.09378,-0.224481 0,-0.130711 -0.09378,-0.224481 -0.09377,-0.09377 -0.224481,-0.09377 -0.13071,0 -0.224481,0.09377 -0.09377,0.09376 -0.09377,0.224481 0,0.130711 0.09377,0.224481 0.09376,0.09377 0.224481,0.09377 z m 0.994537,0.534209 h 1.136613 l -0.568306,-0.90929 z m 0.568307,1.477597 0.568306,-0.90929 h -1.136613 z m -2.472134,0.85246 q -0.136394,0 -0.238689,-0.102293 -0.102293,-0.102293 -0.102293,-0.238689 v -3.409839 q 0,-0.130711 0.102293,-0.235848 0.102293,-0.105131 0.238689,-0.105131 h 3.409839 q 0.130711,0 0.235848,0.105131 0.105131,0.105131 0.105131,0.235848 v 3.409839 q 0,0.136394 -0.105131,0.238689 -0.105143,0.102293 -0.235848,0.102293 z m 0,-0.340984 h 3.409839 V 48.588046 H 55.88009 Z m 0,0 v -3.409839 z"
          style="display: inline; stroke-width: 0.00568306; fill: #000000"
        />
        <path
          id="path1755-2"
          d="m 44.055043,49.863464 v 0.681968 h 0.96612 v 0.227323 h 0.625138 q 0.187541,0 0.321094,-0.133553 0.133551,-0.133552 0.133551,-0.321093 v -0.227322 q 0,-0.187541 -0.133551,-0.321093 -0.133553,-0.133552 -0.321094,-0.133552 h -0.625138 v 0.227322 z m 2.239128,0.340984 q 0,0.130711 0.09377,0.224481 0.09377,0.09378 0.224481,0.09378 0.130711,0 0.224481,-0.09378 0.09377,-0.09377 0.09377,-0.224481 0,-0.13071 -0.09377,-0.224481 -0.09376,-0.09377 -0.224481,-0.09377 -0.130711,0 -0.224481,0.09377 -0.09377,0.09376 -0.09377,0.224481 z m -0.534209,0.994537 v 1.136613 l 0.90929,-0.568306 z m -1.477597,0.568307 0.90929,0.568306 v -1.136613 z m -0.85246,-2.472134 q 0,-0.136394 0.102293,-0.238689 0.102293,-0.102293 0.238689,-0.102293 h 3.409839 q 0.130711,0 0.235848,0.102293 0.105131,0.102293 0.105131,0.238689 v 3.409839 q 0,0.130711 -0.105131,0.235848 -0.105131,0.105131 -0.235848,0.105131 h -3.409839 q -0.136394,0 -0.238689,-0.105131 -0.102293,-0.105143 -0.102293,-0.235848 z m 0.340984,0 v 3.409839 h 3.409839 v -3.409839 z m 0,0 h 3.409839 z"
          style="display: inline; stroke-width: 0.00568306; fill: #000000"
        />
        <path
          style="display: inline; stroke-width: 0.00568306; fill: #000000"
          d="m 44.055043,42.659814 v 0.681968 h 0.96612 v 0.227323 h 0.625138 q 0.187541,0 0.321094,-0.133553 0.133551,-0.133552 0.133551,-0.321093 v -0.227322 q 0,-0.187541 -0.133551,-0.321093 -0.133553,-0.133552 -0.321094,-0.133552 h -0.625138 v 0.227322 z m 2.239128,0.340984 q 0,0.130711 0.09377,0.224481 0.09377,0.09378 0.224481,0.09378 0.130711,0 0.224481,-0.09378 0.09377,-0.09377 0.09377,-0.224481 0,-0.13071 -0.09377,-0.224481 -0.09376,-0.09377 -0.224481,-0.09377 -0.130711,0 -0.224481,0.09377 -0.09377,0.09376 -0.09377,0.224481 z m -0.534209,0.994537 v 1.136613 l 0.90929,-0.568306 z m -1.477597,0.568307 0.90929,0.568306 v -1.136613 z m -0.85246,-2.472134 q 0,-0.136394 0.102293,-0.238689 0.102293,-0.102293 0.238689,-0.102293 h 3.409839 q 0.130711,0 0.235848,0.102293 0.105131,0.102293 0.105131,0.238689 v 3.409839 q 0,0.130711 -0.105131,0.235848 -0.105131,0.105131 -0.235848,0.105131 h -3.409839 q -0.136394,0 -0.238689,-0.105131 -0.102293,-0.105143 -0.102293,-0.235848 z m 0.340984,0 v 3.409839 h 3.409839 v -3.409839 z m 0,0 h 3.409839 z"
          id="path1755-2-8"
        />
        <path
          style="stroke-width: 0.00562168; fill: #000000"
          d="m 53.574079,45.244093 h 0.882604 v -0.747684 h 0.579033 V 43.748725 H 55.61475 V 42.99542 h 0.545304 v -0.337302 h -0.882605 v 0.747684 h -0.579033 v 0.747684 h -0.579034 v 0.753306 h -0.545303 z m -0.393518,0.730819 q -0.134921,0 -0.23611,-0.101191 -0.101191,-0.101189 -0.101191,-0.23611 v -3.37301 q 0,-0.134921 0.101191,-0.236111 0.101189,-0.10119 0.23611,-0.10119 h 3.37301 q 0.134921,0 0.236111,0.10119 0.10119,0.10119 0.10119,0.236111 v 3.37301 q 0,0.134921 -0.10119,0.23611 -0.10119,0.101191 -0.236111,0.101191 z m 0,-0.337301 h 3.37301 v -3.37301 h -3.37301 z m 0,-3.37301 v 3.37301 z"
          id="path1828"
        />
        <g id="g1863">
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 29.975873,16.382379 29.27864,13.865922"
            id="path1839"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            id="path1841"
            sodipodi:nodetypes="cc"
          />
        </g>
        <g
          transform="matrix(-0.87105509,0.49118533,0.49118533,0.87105509,51.761807,-13.580422)"
          style="display: inline"
          id="g1863-4"
        >
          <path
            sodipodi:nodetypes="cc"
            id="path1839-2"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-3"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g transform="translate(7.9770999,-2.0352492)" style="display: inline" id="g1863-5">
          <path
            sodipodi:nodetypes="cc"
            id="path1839-0"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-9"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          id="g1863-4-1"
          style="display: inline"
          transform="matrix(-0.87105509,0.49118533,0.49118533,0.87105509,59.738907,-15.615671)"
        >
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 29.975873,16.382379 29.27864,13.865922"
            id="path1839-2-8"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            id="path1841-3-1"
            sodipodi:nodetypes="cc"
          />
        </g>
        <g transform="translate(14.470971,-3.6557624)" style="display: inline" id="g1863-59">
          <path
            sodipodi:nodetypes="cc"
            id="path1839-5"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-1"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          id="g1863-4-0"
          style="display: inline"
          transform="matrix(-0.87105509,0.49118533,0.49118533,0.87105509,69.360509,-18.245541)"
        >
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 29.975873,16.382379 29.27864,13.865922"
            id="path1839-2-3"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            id="path1841-3-3"
            sodipodi:nodetypes="cc"
          />
        </g>
        <g transform="translate(30.41014,-3.7712137)" style="display: inline" id="g1863-3">
          <path
            sodipodi:nodetypes="cc"
            id="path1839-4"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-7"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          id="g1863-4-6"
          style="display: inline"
          transform="matrix(-0.87105509,0.49118533,0.49118533,0.87105509,82.171947,-17.351636)"
        >
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 29.975873,16.382379 29.27864,13.865922"
            id="path1839-2-32"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            id="path1841-3-0"
            sodipodi:nodetypes="cc"
          />
        </g>
        <g
          transform="rotate(-60.254925,40.654606,34.152319)"
          style="display: inline"
          id="g1863-599"
        >
          <path
            sodipodi:nodetypes="cc"
            id="path1839-9"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-79"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          transform="matrix(-0.60120014,0.79909849,0.79909849,0.60120014,37.604641,42.065413)"
          style="display: inline"
          id="g1863-0"
        >
          <path
            sodipodi:nodetypes="cc"
            id="path1839-05"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-95"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g transform="rotate(-114.92472,48.413337,43.535677)" style="display: inline" id="g1863-6">
          <path
            sodipodi:nodetypes="cc"
            id="path1839-3"
            d="M 29.975873,16.382379 29.27864,13.865922"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1841-5"
            d="M 31.764562,15.479009 C 31.366943,14.457262 30.79507,13.623101 29.289689,13.854873"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.1, 0.2;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-16.813022,-4.5515159)"
        style="display: inline"
        inkscape:label="Selections"
        id="layer6"
        inkscape:groupmode="layer"
      >
        <g
          @click="_locationStore.setSelected(_entryOutdoors)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rEntryOutdoors',
            hotspotFloorHide: _isSelected.id === 'b1f1rEntryOutdoors'
          }"
          style="display: inline"
          inkscape:label="entryOutdoorsSel"
          id="layer4"
          inkscape:groupmode="layer"
        >
          <rect
            ry="3.1607094"
            transform="rotate(-15.130636)"
            y="17.14402"
            x="20.376808"
            height="6.7755251"
            width="28.321323"
            id="entryOutdoorsSel"
            style="
              stroke: none;
              stroke-width: 0.109524;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: 0.109524, 0.219049;
              stroke-dashoffset: 0;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          @click="_locationStore.setSelected(_entryMez)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rEntryMez',
            hotspotFloorHide: _isSelected.id === 'b1f1rEntryMez'
          }"
          inkscape:groupmode="layer"
          id="g2072"
          inkscape:label="entryMezSel"
          style="display: inline"
        >
          <path
            id="entryMezSel"
            d="m 34.968315,37.071329 6.165412,-1.285096 1.115903,3.855941 4.688775,-0.524828 -1.37883,-4.991886 1.076016,-0.29595 3.139432,-0.844823 0.319606,0.814835 2.817302,-0.753444 -0.200177,-0.793008 7.551102,-2.040851 6.7623,1.140353 L 74,29.300737 V 9.1923881 L 52.812029,14.498899 51.28578,10.600857 28.112319,16.833727 24.052417,31.040584 Z"
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <g
          @click="_locationStore.setSelected(_corridors)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rCorridors',
            hotspotFloorHide: _isSelected.id === 'b1f1rCorridors'
          }"
          inkscape:groupmode="layer"
          id="g2132"
          inkscape:label="hotelCorridorSel"
          style="display: inline"
        >
          <path
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 35.077806,37.048507 6.055921,-1.262274 1.115903,3.870017 0.04334,20.402344 -0.369395,8.665253 -6.335972,0.04415 -4.199325,3.367154 -3.918883,-4.840858 7.672824,-6.219983 -0.05466,-24.027834"
            id="hotelCorridorSel"
          />
        </g>
        <g
          @click="_locationStore.setSelected(_corridors)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rCorridors',
            hotspotFloorHide: _isSelected.id === 'b1f1rCorridors'
          }"
          style="display: inline"
          inkscape:groupmode="layer"
          id="g2138"
          inkscape:label="hotelElevSel"
        >
          <path
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 41.984415,67.296676 0.307971,-7.224394 9.453344,0.02142 -0.01645,7.238016 z"
            id="hotelElevSel"
            sodipodi:nodetypes="ccccc"
          />
        </g>
        <g
          @click="_locationStore.setSelected(_corridors)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rCorridors',
            hotspotFloorHide: _isSelected.id === 'b1f1rCorridors'
          }"
          inkscape:groupmode="layer"
          id="g2146"
          inkscape:label="residentialElevSel"
        >
          <path
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 48.570302,60.086507 3.164055,0.0072 9.12642,0.0565 0.373598,-7.371282 H 48.591443 Z"
            id="residentialElevSel"
          />
        </g>
        <g
          @click="_locationStore.setSelected(_corridors)"
          :class="{
            hotspotFloorShow: _isSelected.id !== 'b1f1rCorridors',
            hotspotFloorHide: _isSelected.id === 'b1f1rCorridors'
          }"
          inkscape:groupmode="layer"
          id="g2154"
          inkscape:label="residentialCorridorSel"
        >
          <path
            style="
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 60.839003,63.437675 0.0047,-3.287574 0.389954,-7.356773 0.107868,-20.023348 -1.08172,-2.567785 6.659693,1.132557 0.02364,28.684779 -0.16133,0.218652 v 3.230567 z"
            id="residentialCorridorSel"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocationStore } from '../stores/LocationStore'
import { useOutputStore } from '../stores/OutputStore'
import VolumeGroupComponent from '../components/VolumeGroupComponent.vue'

const _locationStore = useLocationStore()
const { _locations, _isSelected } = storeToRefs(_locationStore)
const _entryOutdoors = ref(_locations.value[0].floors![0].rooms![0])
const _entryMez = ref(_locations.value[0].floors![0].rooms![1])
const _corridors = ref(_locations.value[0].floors![0].rooms![2])
const _outputStore = useOutputStore()
const _outputs = ref(computed(() => _outputStore.getOutputsByLocation(_isSelected.value.id)))
</script>

<style>
.outputWrapper {
  margin: 0px 5px 5px 5px;
  padding: 10px;
}
</style>
