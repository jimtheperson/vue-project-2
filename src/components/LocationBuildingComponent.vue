<template>
  <div class="contentRowWrapper" :class="{ rowReverse: _openInfoRight }">
    <div class="buildingInfo">
      <v-card v-if="_isSelected.id" elevation="2">
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
  </div>

    <svg viewBox="0 0 27 27" class="buildingSVG">
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="layer2"
        inkscape:label="floor1"
        style="display: inline"
        @click="_locationStore.setSelected(_floor1), (_openInfoRight = false)"
      >
        <path
          inkscape:label="FillFloor1"
          id="fillFloor1"
          d="m 10.732008,32.618268 -0.01308,-1.314071 3.791851,-0.0523 5.491647,-0.02615 -3e-6,0.22228 -0.07845,0.117678 -0.0065,0.882588 -0.163442,0.09806 -3.504192,0.379184 -0.490326,-0.117679 -1.229082,0.07192 -2.183584,-0.06538 -0.07191,-0.09807 -1.542891,-0.09807"
          class="fillInactive"
          :class="{ fillActive: _isSelected.id === 'b1f1' }"
        >
          <title id="title2578">Fill Floor 1</title>
        </path>
        <g
          transform="matrix(0.09784391,0,0,0.09784391,4.4100728,4.8396932)"
          id="gFloor1"
          inkscape:label="Floor1"
        >
          <title id="title1807">Floor 1</title>
          <path
            id="path848"
            d="m 61.405174,269.74178 41.827676,0.20045"
            style="
              stroke-width: 1.32292;
              stroke-linecap: butt;
              stroke-linejoin: round;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            id="path852"
            d="m 103.23285,269.94223 56.12661,-0.26728"
            style="
              stroke-width: 1.32292;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccccccccccccc"
            id="path854"
            d="m 64.478772,270.47676 0.133636,13.43028 15.768902,1.00227 0.734991,1.00227 22.317009,0.66818 12.56166,-0.73502 5.01131,1.20272 20.57975,-2.13815 15.23436,-1.73725 1.67044,-1.00225 0.0668,-9.02036 0.8018,-1.20272 3e-5,-2.27178"
            style="
              stroke-width: 0.79375;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cccccccccccccccccc"
            id="path860"
            d="m 64.812859,271.8131 5.34539,-0.20045 v 0.80182 l 7.884451,0.13364 0.06682,-0.86863 5.813113,-0.0668 v 0.80182 l 16.236627,0.0668 v -0.66817 h 15.7689 l -0.0668,1.80408 13.63075,-0.3341 8.81989,-0.40091 3.30087,-0.44553 0.37408,1.18054 12.36122,-0.0668 1.80407,-0.60136 2.40541,0.2004"
            style="
              stroke-width: 0.463021;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862"
            d="m 66.08239,271.99288 -0.06682,11.51328"
            style="
              stroke-width: 0.278966px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.278966px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.721679,272.07003 -0.06682,11.51328"
            id="path862-4"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.278966px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 70.158249,272.41447 -0.06682,11.51328"
            id="path862-7"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.278966px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 76.672948,272.67139 -0.06682,11.51328"
            id="path862-42"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.278966px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 78.0427,272.54811 -0.06682,11.51328"
            id="path862-2"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.296591px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 80.548355,271.70519 -0.06682,13.01402"
            id="path862-9"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.298867px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.617433,271.97234 -0.06682,13.21459"
            id="path862-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.288516px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 84.356946,272.93872 -0.06682,12.31503"
            id="path862-94"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.297043px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 86.962824,272.80141 -0.06682,13.0537"
            id="path862-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.306132px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 96.718162,272.72526 -0.06682,13.86484"
            id="path862-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.30689px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.858579,272.52292 -0.06682,13.93354"
            id="path862-89"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.316416px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 103.50021,271.81194 -0.067,14.7674"
            id="path862-74"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.279111px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.70071,272.00165 -0.0535,14.38911"
            id="path862-422"
          />
          <path
            id="path862-422-0"
            d="m 110.07498,271.96847 -0.0535,14.38911"
            style="
              display: inline;

              stroke-width: 0.279112px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-2"
            d="m 113.01494,271.83483 -0.0535,14.38911"
            style="
              display: inline;

              stroke-width: 0.279112px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-3"
            d="m 115.62094,273.7063 -0.0537,12.11616"
            style="
              display: inline;

              stroke-width: 0.256675px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-6"
            d="m 118.22679,273.77302 -0.0537,12.51726"
            style="
              display: inline;

              stroke-width: 0.260786px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-4"
            d="m 120.69905,273.85707 -0.0537,13.10133"
            style="
              display: inline;

              stroke-width: 0.266853px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-27"
            d="m 122.70352,273.50556 -0.0536,13.25262"
            style="
              display: inline;

              stroke-width: 0.268146px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-22"
            d="m 125.37623,273.57243 -0.0536,13.05206"
            style="
              display: inline;

              stroke-width: 0.266161px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-62"
            d="m 127.78166,273.63933 -0.0537,12.71781"
            style="
              display: inline;

              stroke-width: 0.262815px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-5"
            d="m 129.18485,273.77305 -0.0537,12.38357"
            style="
              display: inline;

              stroke-width: 0.259423px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-9"
            d="m 131.05573,273.773 -0.0537,12.58412"
            style="
              display: inline;

              stroke-width: 0.261464px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-8"
            d="m 133.32755,273.70636 -0.0538,11.9824"
            style="
              display: inline;

              stroke-width: 0.255307px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-37"
            d="m 135.13161,273.57264 -0.0537,12.18301"
            style="
              display: inline;

              stroke-width: 0.257365px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-82"
            d="m 137.06931,273.30536 -0.0537,12.24986"
            style="
              display: inline;

              stroke-width: 0.258053px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-45"
            d="m 138.5393,272.97132 -0.0537,12.04932"
            style="
              display: inline;

              stroke-width: 0.255983px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-1"
            d="m 140.67742,272.50342 -0.0537,12.78467"
            style="
              display: inline;

              stroke-width: 0.263488px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-459"
            d="m 141.61287,272.43667 -0.0537,12.51726"
            style="
              display: inline;

              stroke-width: 0.260786px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-89"
            d="m 143.88467,273.98607 -0.0537,10.90103"
            style="
              display: inline;

              stroke-width: 0.243383px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-13"
            d="m 145.4215,273.76947 -0.0538,10.64981"
            style="
              display: inline;

              stroke-width: 0.240687px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-33"
            d="m 154.50864,273.60078 -0.0537,9.94996"
            style="
              display: inline;

              stroke-width: 0.232539px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path862-422-97"
            d="m 156.98096,273.65112 -0.0539,9.298"
            style="
              display: inline;

              stroke-width: 0.225109px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            style="
              display: inline;

              stroke-width: 0.0792571;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.546099,274.85328 22.250166,0.66817"
            id="path1074"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.079375;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 96.551613,275.85553 18.575237,-0.13361 2.53906,0.26725 23.31926,-0.13364"
            id="path1076"
          />
          <path
            id="path1096"
            d="m 71.360963,284.2368 -0.06682,-8.74875 4.075861,0.0729 v 8.82165"
            style="
              stroke-width: 0.552752;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1100"
            d="m 73.365483,275.48807 v 8.81988"
            style="
              stroke-width: 0.432792;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cccc"
            style="
              display: inline;

              stroke-width: 0.80996;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 88.535725,285.68375 c -0.03394,-10.28788 -0.0679,-9.69924 -0.101842,-12.32521 l 6.212102,0.1027 v 12.42791"
            id="path1096-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.629523;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 91.590854,273.54977 v 12.24346"
            id="path1100-7"
          />
        </g>
        <path
          style="
            stroke-width: 0.0675115;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
          "
          d="M 10.5,32 H -100"
          id="pathFloorLabel1"
          inkscape:label="FloorLabelPath1"
          class="floorLabelPath"
          :class="{ floorLabelPathActive: _isSelected.id === 'b1f1' }"
        />
        <text
          xml:space="preserve"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 0.79375px;
            line-height: 1.25;
            font-family: sans-serif;
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.00389777;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
          "
          x="4.5"
          y="39.5"
          id="labelFloor1"
          inkscape:label="FloorLabel1"
          transform="scale(1.1984459,0.83441397)"
        >
          <tspan
            sodipodi:role="line"
            id="tspan2226"
            x="4.5"
            y="39.5"
            style="
              font-size: 0.79375px;
              stroke-width: 0.00389777;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
            "
            v-if="_isSelected.id != 'b1f1'"
          >
            {{ _floor1.title }}
          </tspan>
        </text>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="layer3"
        inkscape:label="floor2"
        style="display: inline; mix-blend-mode: normal"
      >
        <path
          inkscape:label="FillFloor2"
          id="fillFloor2"
          d="M 10.711232,31.200508 V 29.95835 l 3.766532,-0.0197 5.380837,0.113576 v 1.137557 l -5.348177,0.0435 z"
          class="fillInactive"
          :class="{ fillActive: undefined }"
        >
          <title id="title2572">Fill Floor 2</title>
        </path>
        <g inkscape:label="Floor2" id="gFloor2">
          <title id="title2524">Floor 2</title>
          <path
            style="
              stroke-width: 0.0804652;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="M 10.711232,31.200508 V 29.95835"
            id="path1123"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              stroke-width: 0.0770027;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="M 19.858601,31.189787 V 30.052231"
            id="path1123-4"
            sodipodi:nodetypes="cc"
          />
          <path
            id="path1161"
            d="m 10.711232,29.95835 3.740713,-0.02706 1.804397,0.03922 0.333422,0.0065 3.268837,0.07518"
            style="
              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 10.68883,30.100548 3.740712,-0.02707 1.804398,0.03923 0.333421,0.0065 3.268837,0.07518"
            id="path1161-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 10.741131,30.23784 3.740713,-0.02707 1.804397,0.03923 0.333422,0.0065 3.268837,0.07518"
            id="path1161-3"
          />
          <path
            sodipodi:nodetypes="ccccc"
            id="path1161-3-1"
            d="m 10.714981,30.518959 3.740712,-0.02707 1.804397,0.03923 0.333422,0.0065 3.268837,-0.01634"
            style="
              display: inline;

              stroke-width: 0.00776636;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 11.098118,31.173445 -0.02615,-0.92835"
            id="path1199"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 11.405389,31.186519 11.379238,30.25817"
            id="path1199-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0262345px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 11.784558,31.199617 -0.02612,-0.954545"
            id="path1199-4"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 12.072231,31.166907 -0.02615,-0.92835"
            id="path1199-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 12.399115,31.173445 -0.02615,-0.92835"
            id="path1199-40"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0263204px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 12.601763,31.20616 -0.02611,-0.961094"
            id="path1199-09"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0269127px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 12.824017,31.245425 12.79796,30.23849"
            id="path1199-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 13.275163,31.179981 -0.02615,-0.928349"
            id="path1199-9"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 13.510519,31.193056 -0.02615,-0.92835"
            id="path1199-3"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 13.98777,31.173445 -0.02615,-0.92835"
            id="path1199-2"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 14.26889,31.179981 14.24274,30.251632"
            id="path1199-17"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 14.628462,31.153831 -0.02615,-0.92835"
            id="path1199-38"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 14.883431,31.199595 -0.02615,-0.928351"
            id="path1199-21"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 15.1384,31.199594 -0.02615,-0.92835"
            id="path1199-57"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 15.321455,31.173445 -0.02615,-0.92835"
            id="path1199-99"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 15.524123,31.193057 -0.02615,-0.92835"
            id="path1199-7"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 15.707178,31.173445 -0.02615,-0.92835"
            id="path1199-98"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 15.916383,31.186519 15.890233,30.25817"
            id="path1199-8"
          />
          <path
            sodipodi:nodetypes="cc"
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 16.086363,31.173444 c -0.02515,-0.519167 -0.01493,-0.6661 -0.02615,-0.92835"
            id="path1199-407"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 16.243267,31.193056 -0.02615,-0.92835"
            id="path1199-34"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 16.380558,31.173444 -0.02615,-0.92835"
            id="path1199-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0267383px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 16.471989,31.255704 -0.02596,-0.997678"
            id="path1199-091"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0265761px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 16.57012,31.238865 16.54403,30.258126"
            id="path1199-88"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 16.818582,31.225745 -0.02615,-0.92835"
            id="path1199-84"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 17.08009,31.219208 -0.02615,-0.92835"
            id="path1199-00"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 17.236993,31.232283 -0.02615,-0.92835"
            id="path1199-33"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 17.452737,31.219208 -0.02615,-0.92835"
            id="path1199-41"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 17.694631,31.219208 -0.02615,-0.92835"
            id="path1199-992"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 17.92345,31.206132 17.8973,30.277782"
            id="path1199-11"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 18.093429,31.21267 -0.02615,-0.92835"
            id="path1199-16"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 18.309172,31.238821 -0.02615,-0.92835"
            id="path1199-95"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 18.570679,31.245359 -0.02615,-0.92835"
            id="path1199-63"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0258878px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 18.799498,31.199595 -0.02615,-0.928351"
            id="path1199-52"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0255358px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 18.976032,31.206111 -0.02618,-0.902156"
            id="path1199-18"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0249732px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 19.204834,31.161302 -0.02615,-0.863906"
            id="path1199-50"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.0250032px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 19.414039,31.16992 -0.02615,-0.865987"
            id="path1199-45"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.025477px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 19.590556,31.189973 -0.02615,-0.899115"
            id="path1199-31"
          />
          <path
            id="path1690-4-9"
            d="m 14.510424,31.233285 -0.03266,-1.29463"
            style="
              display: inline;

              stroke-width: 0.0770562;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor3"
        id="g1518"
        inkscape:groupmode="layer"
      >
        <path
          inkscape:label="FillFloor3"
          id="fillFloor3"
          d="m 10.711232,29.95835 v -1.582117 l 3.734349,-0.0014 5.412918,0.24535 1.01e-4,1.432021 -5.380678,-0.113947 z"
          style="
            stroke: none;
            stroke-width: 0.265;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
          "
        >
          <title id="title2582">Fill Floor 3</title>
        </path>
        <g
          transform="matrix(0.09784391,0,0,0.09784391,4.4099192,4.8400669)"
          id="gFloor3"
          inkscape:label="Floor3"
        >
          <title id="title1903">Floor 3</title>
          <path
            sodipodi:nodetypes="cc"
            id="path1432"
            d="m 64.400073,256.72172 v -16.1698"
            style="
              stroke-width: 0.928121;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1434"
            d="m 157.88947,257.68121 -10e-4,-14.63577"
            style="
              stroke-width: 0.786995;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccccc"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.400072,240.8514 38.231428,-0.27661 18.44159,0.4009 3.40769,0.0668 33.40765,2.00295"
            id="path1436"
          />
          <path
            sodipodi:nodetypes="ccccc"
            id="path1438"
            d="m 64.171112,242.30471 38.231428,-0.27661 18.44159,0.4009 3.40769,0.0668 31.27053,1.97111"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccccc"
            id="path1440"
            d="m 64.70565,243.70788 38.23143,-0.27661 18.44159,0.4009 3.40769,0.0668 31.87189,2.17157"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.079375;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.572015,250.99096 38.164605,-0.87796 17.84024,0.53453 3.87541,0.26725 32.6737,1.70385"
            id="path1442"
            sodipodi:nodetypes="ccccc"
          />
          <path
            id="path1444"
            d="M 68.353051,255.91767 68.088043,244.48846"
            style="
              display: inline;

              stroke-width: 0.289159px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1446"
            d="M 71.49332,256.05155 71.228607,244.35457"
            style="
              display: inline;

              stroke-width: 0.292364px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1448"
            d="M 75.36854,256.18549 75.104205,244.087"
            style="
              display: inline;

              stroke-width: 0.297126px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1450"
            d="M 78.308767,255.85097 78.043906,244.28788"
            style="
              display: inline;

              stroke-width: 0.290766px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1452"
            d="M 81.649417,255.91818 81.384996,243.95341"
            style="
              display: inline;

              stroke-width: 0.295529px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1454"
            d="M 83.720578,256.25253 83.456511,243.88631"
            style="
              display: inline;

              stroke-width: 0.300244px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1456"
            d="M 85.992502,256.12399 85.728169,243.95878"
            style="
              display: inline;

              stroke-width: 0.297944px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1458"
            d="M 90.602983,255.98492 90.338488,244.0871"
            style="
              display: inline;

              stroke-width: 0.294741px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1460"
            d="m 93.008192,256.11894 -0.264063,-12.2995"
            style="
              display: inline;

              stroke-width: 0.299431px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1462"
            d="M 97.885649,255.9189 97.62201,243.2177"
            style="
              display: inline;

              stroke-width: 0.304037px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1464"
            d="m 100.75887,255.98557 -0.26378,-12.56729"
            style="
              display: inline;

              stroke-width: 0.30251px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1466"
            d="M 104.43557,256.14203 104.1683,243.58157"
            style="
              display: inline;

              stroke-width: 0.304422px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1468"
            d="m 107.03999,256.18551 -0.26435,-12.03172"
            style="
              display: inline;

              stroke-width: 0.296314px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1470"
            d="m 109.64554,256.71526 -0.26371,-12.63425"
            style="
              display: inline;

              stroke-width: 0.303275px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1472"
            d="m 111.51661,256.44767 -0.26407,-12.2995"
            style="
              display: inline;

              stroke-width: 0.299431px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1474"
            d="m 113.58774,256.43672 -0.26365,-12.4894"
            style="
              display: inline;

              stroke-width: 0.301491px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1476"
            d="m 115.45916,255.91792 -0.26471,-11.69698"
            style="
              display: inline;

              stroke-width: 0.292364px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1478"
            d="M 117.59724,256.05168 117.33267,244.2208"
            style="
              display: inline;

              stroke-width: 0.293951px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1480"
            d="m 119.33415,255.91817 c -0.25375,-6.57913 -0.15066,-8.44114 -0.26389,-11.7645"
            style="
              display: inline;

              stroke-width: 0.292749px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="cc"
          />
          <path
            id="path1482"
            d="m 120.93807,256.11855 -0.26449,-11.89782"
            style="
              display: inline;

              stroke-width: 0.294741px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1484"
            d="m 122.34112,256.44746 -0.26427,-12.09865"
            style="
              display: inline;

              stroke-width: 0.297096px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1486"
            d="m 123.27622,256.22882 -0.26358,-11.80288"
            style="
              display: inline;

              stroke-width: 0.293062px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1488"
            d="M 124.61267,256.98241 124.3489,244.2816"
            style="
              display: inline;

              stroke-width: 0.304103px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1490"
            d="m 126.81754,257.04948 -0.26357,-12.76814"
            style="
              display: inline;

              stroke-width: 0.304796px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1492"
            d="m 129.49052,256.91532 -0.26413,-12.23255"
            style="
              display: inline;

              stroke-width: 0.298655px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1494"
            d="m 131.09424,257.04876 -0.26435,-12.03171"
            style="
              display: inline;

              stroke-width: 0.296314px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1496"
            d="m 133.29922,256.91513 -0.26435,-12.03171"
            style="
              display: inline;

              stroke-width: 0.296314px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1498"
            d="m 135.77161,256.91487 -0.26465,-11.76392"
            style="
              display: inline;

              stroke-width: 0.293159px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1500"
            d="m 138.11033,256.78104 -0.26487,-11.56309"
            style="
              display: inline;

              stroke-width: 0.290766px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1502"
            d="m 139.8475,256.84799 -0.26471,-11.69698"
            style="
              display: inline;

              stroke-width: 0.292364px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1504"
            d="m 142.05225,257.11564 -0.26427,-12.09865"
            style="
              display: inline;

              stroke-width: 0.297096px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1506"
            d="m 144.79221,257.1817 -0.26515,-11.29532"
            style="
              display: inline;

              stroke-width: 0.287541px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1508"
            d="m 147.064,256.71398 -0.26515,-11.29533"
            style="
              display: inline;

              stroke-width: 0.287541px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1510"
            d="m 148.86817,256.78068 -0.26535,-11.09464"
            style="
              display: inline;

              stroke-width: 0.285069px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path1512"
            d="m 150.87234,257.02337 -0.26465,-10.90469"
            style="
              display: inline;

              stroke-width: 0.282251px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1514"
            d="m 153.34589,257.21091 -0.0668,-11.18931"
            style="
              display: inline;

              stroke-width: 0.255542px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1516"
            d="m 155.21678,257.14859 -0.0668,-11.1938"
            style="
              display: inline;

              stroke-width: 0.260384px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.861185;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.897,256.51661 -0.33054,-15.97873"
            id="path1690-4"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="layer4"
        inkscape:label="floor4"
        style="display: inline"
        @click="_locationStore.setSelected(_floor4), (_openInfoRight = true)"
      >
        <path
          inkscape:label="FillFloor4"
          id="fillFloor4"
          d="m 10.711232,28.376233 -0.01968,-1.202677 3.766933,-0.190761 5.426371,0.448098 -0.02636,1.18929 -5.412918,-0.245323 z"
          class="fillInactive"
          :class="{ fillActive: _isSelected.id === 'b1f4' }"
        >
          <title id="title2586">Fill Floor 4</title>
        </path>
        <g
          transform="matrix(0.09784391,0,0,0.09784391,4.4099192,4.8400669)"
          id="gFloor4"
          inkscape:label="Floor4"
        >
          <title id="title1951">Floor 4</title>
          <path
            style="
              display: inline;

              stroke-width: 0.734;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="M 64.400789,240.7459 64.198904,228.26013"
            id="path1432-4"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.733583;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 157.88843,243.04544 0.26936,-12.15524"
            id="path1434-1"
            sodipodi:nodetypes="cc"
          />
          <path
            sodipodi:nodetypes="ccccc"
            id="path1436-8"
            d="m 64.19962,228.25752 38.4987,-1.94704 18.24114,0.86862 3.80859,0.0668 33.4087,3.64154"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccccc"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.839286,229.44356 37.630074,-1.81341 18.37477,0.80181 3.74178,0.20043 32.80734,3.4411"
            id="path1438-8"
          />
          <path
            sodipodi:nodetypes="ccccc"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.132803,230.59613 c 12.74381,-0.092 25.107644,-1.55697 38.699157,-1.14524 l 17.7449,0.38424 3.14043,-2e-5 c 13.30746,1.81353 33.63994,3.76053 33.0746,3.50791"
            id="path1440-9"
          />
          <path
            sodipodi:nodetypes="ccccc"
            id="path1442-7"
            d="m 64.43838,233.35655 38.23144,-0.27661 18.44159,0.4009 3.40768,0.0668 32.68919,2.55109"
            style="
              display: inline;

              stroke-width: 0.079375;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.354182,240.04563 -0.26727,-9.48807"
            id="path1444-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 71.494598,240.17926 -0.267269,-9.48807"
            id="path1446-9"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.268126px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.369845,240.31312 -0.266943,-9.75579"
            id="path1448-9"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 78.309972,239.97881 -0.267269,-9.48807"
            id="path1450-4"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.650842,240.04563 -0.267269,-9.48807"
            id="path1452-4"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.269005px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.721977,240.37999 -0.266863,-9.82272"
            id="path1454-7"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.275058px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 85.993489,240.7813 85.727184,230.49006"
            id="path1456-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.60437,240.11244 -0.267268,-9.48807"
            id="path1458-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 93.009795,240.24607 92.742526,230.758"
            id="path1460-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.887465,240.04563 -0.267269,-9.48807"
            id="path1462-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 100.76061,240.11244 -0.26725,-9.48807"
            id="path1464-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 104.43558,239.84517 104.1683,230.3571"
            id="path1466-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 107.04145,240.3129 -0.26726,-9.48808"
            id="path1468-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.64732,240.31289 -0.26727,-9.48807"
            id="path1470-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 111.51821,240.04563 -0.26727,-9.48807"
            id="path1472-9"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 113.58956,240.24608 -0.26728,-9.48807"
            id="path1474-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.46045,240.04563 -0.26728,-9.48807"
            id="path1476-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 117.59859,240.17926 -0.26727,-9.48807"
            id="path1478-0"
          />
          <path
            sodipodi:nodetypes="cc"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 119.33585,240.04562 c -0.25701,-5.30607 -0.1526,-6.80778 -0.26728,-9.48807"
            id="path1480-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 120.93946,240.24607 120.67219,230.758"
            id="path1482-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.34263,240.04562 -0.26728,-9.48807"
            id="path1484-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.273275px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 123.27708,240.88635 -0.2653,-10.19663"
            id="path1486-4"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.271616px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.28001,240.71425 -0.26663,-10.02351"
            id="path1488-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.81939,240.58016 -0.26726,-9.48807"
            id="path1490-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 129.49209,240.51335 -0.26727,-9.48807"
            id="path1492-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 131.0957,240.64698 -0.26726,-9.48807"
            id="path1494-2"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 133.30069,240.51335 -0.26728,-9.48807"
            id="path1496-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.77292,241.04252 -0.26727,-9.48807"
            id="path1498-1"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 138.11154,241.43805 -0.26728,-9.48807"
            id="path1500-3"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 139.84878,241.50487 -0.26726,-9.48807"
            id="path1502-5"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 142.05376,241.77214 -0.26728,-9.48807"
            id="path1504-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.72646,242.36813 -0.26728,-9.48807"
            id="path1506-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 147.06507,242.42958 146.7978,232.9415"
            id="path1508-0"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.260985px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 148.8693,242.49617 -0.2676,-9.22036"
            id="path1510-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.255235px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 151.20774,242.03821 -0.26726,-8.82943"
            id="path1512-6"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.255542px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 153.34589,242.65546 -0.26726,-8.8507"
            id="path1514-8"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.260384px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 155.14996,242.86041 -0.26726,-9.18928"
            id="path1516-3"
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1690-4-3"
            d="m 102.56646,240.53788 0.13186,-14.2274"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
        <path
          style="
            stroke-width: 0.0675116;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
          "
          d="M 20.2,28.223103 H 100"
          id="pathFloorLabel4"
          inkscape:label="FloorLabelPath4"
          class="floorLabelPath"
          :class="{ floorLabelPathActive: _isSelected.id === 'b1f4' }"
        />
        <text
          xml:space="preserve"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 0.79375px;
            line-height: 1.25;
            font-family: sans-serif;
            text-align: end;
            text-anchor: end;
            display: inline;
            mix-blend-mode: normal;
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.00389776;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
          "
          x="21"
          y="34.705257"
          id="labelFloor4"
          inkscape:label="FloorLabel4"
          transform="scale(1.1984459,0.83441397)"
        >
          <tspan
            id="tspan2981"
            sodipodi:role="line"
            x="21"
            y="34.705257"
            style="
              font-size: 0.79375px;
              text-align: end;
              text-anchor: end;
              stroke-width: 0.00389776;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
            "
            v-if="_isSelected.id != 'b1f4'"
          >
          {{ _floor4.title }}
          </tspan>
        </text>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="layer5"
        inkscape:label="floor5"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,4.8396932)" id="g2659">
          <path
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.199618,228.25752 -0.09492,-5.19125 16.845854,-1.01754 0.395708,-0.84794 21.19865,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.23176,2.11341 -0.16959,0.90447 5.37032,0.50877 -0.11306,5.08767"
            id="path2294"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 24.19472,1.96445"
            id="path2298"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            id="path2304"
          />
          <path
            id="path2304-8"
            d="M 72.370297,227.64366 72.25038,223.48651"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-9"
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-4"
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-40"
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-93"
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-3"
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-0"
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-00"
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-81"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-7"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-1"
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-75"
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-47"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-07"
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-74"
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-2"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-34"
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-41"
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-71"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-759"
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-97"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-06"
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-84"
            d="M 128.25192,227.56372 128.132,223.40657"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-91"
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-6"
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-42"
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-65"
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-46"
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-89"
            d="m 141.9625,228.603 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-94"
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-79"
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-61"
            d="M 148.63792,229.4824 148.518,225.32525"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-894"
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-429"
            d="M 151.67583,229.84215 151.55592,225.685"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2304-24"
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path1690-4-3-8"
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor6"
        id="g2741"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3950675,4.3266832)" id="g2739">
          <path
            id="path2661"
            d="m 64.199618,228.25752 -0.09492,-5.19125 16.845854,-1.01754 0.395708,-0.84794 21.19865,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.20217,2.36282 -0.14,0.65506 5.37032,0.50877 -0.11306,5.08767"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path2663"
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 2.71592,0.22814 24.19472,1.96445"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2665"
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 72.370297,227.64366 72.25038,223.48651"
            id="path2667"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            id="path2669"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            id="path2671"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            id="path2673"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            id="path2675"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            id="path2677"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            id="path2679"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            id="path2681"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path2683"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path2685"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            id="path2687"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            id="path2689"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path2691"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            id="path2693"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            id="path2695"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path2697"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            id="path2699"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            id="path2701"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path2703"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            id="path2705"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path2707"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            id="path2709"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 128.25192,227.56372 128.132,223.40657"
            id="path2711"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            id="path2713"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            id="path2715"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            id="path2717"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            id="path2719"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            id="path2721"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 141.9625,228.603 -0.11991,-4.15715"
            id="path2723"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            id="path2725"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            id="path2727"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 148.63792,229.4824 148.518,225.32525"
            id="path2729"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            id="path2731"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 151.67583,229.84215 151.55592,225.685"
            id="path2733"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            id="path2735"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            id="path2737"
            sodipodi:nodetypes="cc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g2823"
        inkscape:label="floor7"
      >
        <g id="g2821" transform="matrix(0.09784391,0,0,0.09784391,4.3800575,3.7327032)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.258108,229.13697 -0.15341,-6.0707 16.845854,-1.01754 0.395708,-0.84794 21.19865,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.1599,2.45582 -0.0977,0.56206 5.37032,0.50877 0.15341,6.0707"
            id="path2743"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 23.59022,2.13354"
            id="path2745"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            id="path2747"
          />
          <path
            id="path2749"
            d="M 72.370297,227.64366 72.25038,223.48651"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2751"
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2753"
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2755"
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2757"
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2759"
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2761"
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2763"
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2765"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2767"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2769"
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2771"
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2773"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2775"
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2777"
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2779"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2781"
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2783"
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2785"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2787"
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2789"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2791"
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2793"
            d="M 128.25192,227.56372 128.132,223.40657"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2795"
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2797"
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2799"
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2801"
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2803"
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2805"
            d="m 141.9625,228.603 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2807"
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2809"
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2811"
            d="M 148.63792,229.4824 148.518,225.32525"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2813"
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2815"
            d="M 151.67583,229.84215 151.55592,225.685"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path2817"
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path2819"
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor8"
        id="g3788"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3650475,3.1387232)" id="g3786">
          <path
            id="path3708"
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.18949,2.4685 -0.12732,0.54938 5.65728,0.60442 -0.13355,5.97505"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path3710"
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 23.56909,2.18427"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3712"
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 72.370297,227.64366 72.25038,223.48651"
            id="path3714"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            id="path3716"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            id="path3718"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            id="path3720"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            id="path3722"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            id="path3724"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            id="path3726"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            id="path3728"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path3730"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path3732"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            id="path3734"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            id="path3736"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path3738"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            id="path3740"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            id="path3742"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path3744"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            id="path3746"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            id="path3748"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path3750"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            id="path3752"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path3754"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            id="path3756"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 128.25192,227.56372 128.132,223.40657"
            id="path3758"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            id="path3760"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            id="path3762"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            id="path3764"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            id="path3766"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            id="path3768"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 141.9625,228.603 -0.11991,-4.15715"
            id="path3770"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            id="path3772"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            id="path3774"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 148.63792,229.4824 148.518,225.32525"
            id="path3776"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            id="path3778"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 151.67583,229.84215 151.55592,225.685"
            id="path3780"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            id="path3782"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            id="path3784"
            sodipodi:nodetypes="cc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g3870"
        inkscape:label="floor9"
      >
        <g id="g3868" transform="matrix(0.09784391,0,0,0.09784391,4.3640785,2.5494232)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.1599,2.48118 -0.0977,0.5367 5.65728,0.60442 -0.13355,5.97505"
            id="path3790"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 63.418807,224.34747 16.619737,-0.90447 0.487564,-0.6077 21.219852,-1.03166 18.31563,1.18712 3.56137,-0.0424 24.02733,2.27532"
            id="path3792"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            id="path3794"
          />
          <path
            id="path3796"
            d="M 72.370297,227.64366 72.25038,223.48651"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3798"
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3800"
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3802"
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3804"
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3806"
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3808"
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3810"
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3812"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3814"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3816"
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3818"
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3820"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3822"
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3824"
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3826"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3828"
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3830"
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3832"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3834"
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3836"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3838"
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3840"
            d="M 128.25192,227.56372 128.132,223.40657"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3842"
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3844"
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3846"
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3848"
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3850"
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3852"
            d="m 141.9625,228.603 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3854"
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3856"
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3858"
            d="M 148.63792,229.4824 148.518,225.32525"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3860"
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3862"
            d="M 151.67583,229.84215 151.55592,225.685"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3864"
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path3866"
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor10"
        id="g3952"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3640785,1.9798832)" id="g3950">
          <path
            id="path3872"
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.16002,2.65145 -0.1935,0.64143 5.77684,0.80768 -0.15746,5.49679"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path3874"
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 23.33385,2.34706"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3876"
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 72.370297,227.64366 72.25038,223.48651"
            id="path3878"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            id="path3880"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            id="path3882"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            id="path3884"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            id="path3886"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            id="path3888"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            id="path3890"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            id="path3892"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path3894"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path3896"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            id="path3898"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            id="path3900"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path3902"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            id="path3904"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            id="path3906"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path3908"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            id="path3910"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            id="path3912"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path3914"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            id="path3916"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path3918"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            id="path3920"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 128.25192,227.56372 128.132,223.40657"
            id="path3922"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            id="path3924"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            id="path3926"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            id="path3928"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            id="path3930"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            id="path3932"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 141.9625,228.603 -0.11991,-4.15715"
            id="path3934"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            id="path3936"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            id="path3938"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 148.63792,229.4824 148.518,225.32525"
            id="path3940"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            id="path3942"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 151.67583,229.84215 151.55592,225.685"
            id="path3944"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            id="path3946"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            id="path3948"
            sodipodi:nodetypes="cc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g4034"
        inkscape:label="floor11"
      >
        <g id="g4032" transform="matrix(0.09784391,0,0,0.09784391,4.3640785,1.4621332)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.0799 24.16002,2.65145 -0.1935,0.64143 5.77684,0.80768 -0.15746,5.49679"
            id="path3954"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 23.33385,2.34706"
            id="path3956"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            id="path3958"
          />
          <path
            id="path3960"
            d="M 72.370297,227.64366 72.25038,223.48651"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3962"
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3964"
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3966"
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3968"
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3970"
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3972"
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3974"
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3976"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3978"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3980"
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3982"
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3984"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3986"
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3988"
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3990"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3992"
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3994"
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3996"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path3998"
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4000"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4002"
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4004"
            d="M 128.25192,227.56372 128.132,223.40657"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4006"
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4008"
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4010"
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4012"
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4014"
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4016"
            d="m 141.9625,228.603 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4018"
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4020"
            d="m 146.63929,229.08267 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4022"
            d="M 148.63792,229.4824 148.518,225.32525"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4024"
            d="m 150.23682,229.80218 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4026"
            d="M 151.67583,229.84215 151.55592,225.685"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4028"
            d="m 152.87501,229.88212 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path4030"
            d="m 102.69832,226.31048 -0.15341,-6.0707"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor12"
        id="g4116"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3640785,0.84082324)" id="g4114">
          <path
            id="path4036"
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.68863 24.16002,3.26018 -0.1935,0.64143 5.77684,0.80768 v 6.35"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path4038"
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 23.33385,2.34706"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4040"
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 72.370297,227.64366 72.25038,223.48651"
            id="path4042"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            id="path4044"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            id="path4046"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            id="path4048"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            id="path4050"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            id="path4052"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            id="path4054"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            id="path4056"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path4058"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path4060"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            id="path4062"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            id="path4064"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path4066"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            id="path4068"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            id="path4070"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path4072"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            id="path4074"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            id="path4076"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path4078"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            id="path4080"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path4082"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            id="path4084"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 128.25192,227.56372 128.132,223.40657"
            id="path4086"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            id="path4088"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            id="path4090"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            id="path4092"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 137.52555,228.08336 -0.11992,-4.15715"
            id="path4094"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 139.76401,228.44311 -0.11991,-4.15715"
            id="path4096"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 141.9625,228.603 -0.11991,-4.15715"
            id="path4098"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.16099,228.80287 -0.11991,-4.15715"
            id="path4100"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 146.63929,229.61184 -0.11992,-4.15715"
            id="path4102"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 148.63792,230.01157 148.518,225.85442"
            id="path4104"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 150.23682,230.86052 -0.11992,-4.15715"
            id="path4106"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 151.67583,230.90049 -0.11991,-4.15715"
            id="path4108"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 152.87501,230.94046 -0.11992,-4.15715"
            id="path4110"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.54494,226.58978 -3e-5,-6.35"
            id="path4112"
            sodipodi:nodetypes="cc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g4198"
        inkscape:label="floor13"
      >
        <g id="g4196" transform="matrix(0.09784391,0,0,0.09784391,4.3640785,0.21951324)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.258108,229.13697 -0.0099,-6.02287 16.702376,-1.06537 0.395708,-0.84794 21.198648,-0.96101 18.81174,1.52791 3.19781,-0.68863 24.07632,3.64279 -0.11281,0.6034 5.97115,1.32397 -0.1913,5.48913"
            id="path4118"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.21776,224.14033 16.619737,-0.90447 0.487564,-0.6077 21.219849,-1.03166 18.31563,1.18712 3.56137,-0.0424 21.79855,2.543"
            id="path4120"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.672836,227.64366 -0.119917,-4.15715"
            id="path4122"
          />
          <path
            id="path4124"
            d="M 72.370297,227.64366 72.25038,223.48651"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4126"
            d="m 75.648046,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4128"
            d="m 79.00574,227.28391 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4130"
            d="m 81.124285,227.04407 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4132"
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4134"
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4136"
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4138"
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4140"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4142"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4144"
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4146"
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4148"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4150"
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4152"
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4154"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4156"
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4158"
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4160"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4162"
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4164"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4166"
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4168"
            d="M 128.25192,227.56372 128.132,223.40657"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4170"
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4172"
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4174"
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4176"
            d="m 137.52555,228.61253 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4178"
            d="m 139.76401,228.97228 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4180"
            d="m 141.9625,229.13217 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4182"
            d="m 144.16099,229.33204 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4184"
            d="m 146.63929,229.61184 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4186"
            d="M 148.63792,230.01157 148.518,225.85442"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4188"
            d="M 150.23682,230.33135 150.1169,226.1742"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4190"
            d="m 151.67583,230.90049 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4192"
            d="m 152.87501,230.94046 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path4194"
            d="m 102.54494,226.58978 -3e-5,-6.35"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor14"
        id="g4280"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3640785,-0.40179676)" id="g4278">
          <path
            id="path4200"
            d="m 64.248208,229.4641 0.08454,-5.06491 16.144378,-1.1161 0.683161,-1.64266 21.289003,-2.405 18.90739,2.53226 3.19781,-0.68863 24.07632,4.25152 -0.11281,1.01917 5.90351,2.12565 0.0676,4.52382"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path4202"
            d="m 64.404112,225.54894 16.450294,-1.29854 0.572109,-1.1657 21.070565,-2.10994 18.36346,1.80886 3.56137,-0.0424 22.97029,3.71474"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path4204"
            d="m 68.672836,228.702 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 72.370297,229.23117 72.25038,225.07402"
            id="path4206"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.648046,228.87142 -0.119917,-4.15715"
            id="path4208"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 79.00574,228.34225 78.885823,224.1851"
            id="path4210"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 81.124285,227.57324 -0.119917,-4.15715"
            id="path4212"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.442693,227.12402 -0.119917,-4.15715"
            id="path4214"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 85.761101,226.40451 -0.119917,-4.15715"
            id="path4216"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 90.198054,226.48446 -0.119917,-4.15715"
            id="path4218"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.356571,225.88487 -0.119917,-4.15715"
            id="path4220"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path4222"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path4224"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.94792,226.2846 -0.11991,-4.15715"
            id="path4226"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.54683,226.44449 -0.11992,-4.15715"
            id="path4228"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path4230"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 110.42416,226.60438 -0.11991,-4.15715"
            id="path4232"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 112.78254,226.84421 -0.11991,-4.15715"
            id="path4234"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path4236"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 116.97966,226.76427 -0.11992,-4.15715"
            id="path4238"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 118.65851,226.96413 -0.11992,-4.15715"
            id="path4240"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path4242"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 122.49587,226.92416 -0.11991,-4.15715"
            id="path4244"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path4246"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.33324,227.12402 -0.11992,-4.15715"
            id="path4248"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 128.25192,227.56372 128.132,223.40657"
            id="path4250"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.65027,227.60369 -0.11991,-4.15715"
            id="path4252"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 132.68887,227.80355 -0.11991,-4.15715"
            id="path4254"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 135.08722,228.40314 -0.11991,-4.15715"
            id="path4256"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 137.52555,228.61253 -0.11992,-4.15715"
            id="path4258"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 139.76401,229.50145 139.6441,225.3443"
            id="path4260"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 141.9625,229.66134 -0.11991,-4.15715"
            id="path4262"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 144.16099,229.86121 -0.11991,-4.15715"
            id="path4264"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 146.63929,230.67018 -0.11992,-4.15715"
            id="path4266"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 148.63792,231.06991 148.518,226.91276"
            id="path4268"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 150.23682,231.91886 -0.11992,-4.15715"
            id="path4270"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 151.67583,232.488 -0.11991,-4.15715"
            id="path4272"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 152.87501,232.52797 -0.11992,-4.15715"
            id="path4274"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.54494,226.58978 -0.0956,-7.35435"
            id="path4276"
            sodipodi:nodetypes="cc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g5526"
        inkscape:label="floor15"
      >
        <g id="g5524" transform="matrix(0.09784391,0,0,0.09784391,4.3640785,-1.1266568)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.332748,231.80753 -0.121387,-7.1251 16.265765,-1.39934 0.683161,-1.64266 21.289003,-2.405 18.90739,2.53226 2.56226,-0.44238 24.2827,4.80638 2.83415,1.41973 2.38801,1.24569 0.004,6.73885"
            id="path5446"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.404112,225.54894 16.450294,-1.29854 0.572109,-1.1657 21.111025,-2.49433 18.323,2.19325 3.09114,-0.50265 23.18302,4.37527"
            id="path5448"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.551449,230.07772 -0.119917,-4.15715"
            id="path5450"
          />
          <path
            id="path5452"
            d="m 72.491684,229.55487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5454"
            d="m 75.809896,229.59974 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5456"
            d="m 78.722503,229.35381 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5458"
            d="M 80.974323,228.40755 80.854406,224.2504"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5460"
            d="m 83.402231,227.36679 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5462"
            d="M 85.518327,227.41607 85.39841,223.25892"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5464"
            d="M 90.076667,226.88908 89.95675,222.73193"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5466"
            d="m 92.518421,226.53227 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5468"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5470"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5476"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5482"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5488"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5492"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path5522"
            d="m 102.54494,226.58978 -0.0956,-7.35435"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5532"
            d="m 126.55095,227.11686 3.47976,-2.02312"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5534"
            d="m 128.33129,228.00703 5.17919,-2.67051"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5536"
            d="m 130.75904,228.41166 4.61271,-2.50867"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5538"
            d="m 138.93244,230.192 4.93641,-2.83236"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5540"
            d="m 145.9729,231.4868 3.07514,-2.10405"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5542"
            d="m 104.70125,225.41744 2.34682,-1.78035"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5544"
            d="m 106.96715,226.14576 3.80346,-3.07514"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5546"
            d="m 111.66079,226.55039 2.26589,-2.10405"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor16"
        id="g5602"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3640785,-1.7479668)" id="g5600">
          <path
            id="path5548"
            d="m 64.332748,231.80753 -0.121387,-7.1251 16.265765,-1.39934 0.683161,-1.64266 21.289003,-2.405 18.90739,2.53226 2.56226,-0.44238 24.03993,5.81794 3.21303,1.11686 2.2196,1.96029 0.0323,4.92671"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path5550"
            d="m 64.404112,225.54894 16.450294,-1.29854 0.572109,-1.1657 21.111025,-2.49433 18.323,2.19325 3.09114,-0.50265 22.66802,5.21931"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5552"
            d="m 68.551449,230.07772 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 72.491684,229.55487 -0.119917,-4.15715"
            id="path5554"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.809896,229.59974 -0.119917,-4.15715"
            id="path5556"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 78.722503,229.35381 -0.119917,-4.15715"
            id="path5558"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 80.974323,228.40755 80.854406,224.2504"
            id="path5560"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.402231,227.36679 -0.119917,-4.15715"
            id="path5562"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 85.518327,227.41607 85.39841,223.25892"
            id="path5564"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 90.076667,226.88908 89.95675,222.73193"
            id="path5566"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.518421,226.53227 -0.119917,-4.15715"
            id="path5568"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path5570"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path5572"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            id="path5574"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path5576"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            id="path5578"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            id="path5580"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.54494,226.58978 -0.0956,-7.35435"
            id="path5582"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.55095,227.11686 3.47976,-2.02312"
            id="path5584"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 128.33129,228.00703 5.17919,-2.67051"
            id="path5586"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 130.75904,228.41166 4.61271,-2.50867"
            id="path5588"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 138.93244,230.192 4.93641,-2.83236"
            id="path5590"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 145.9729,231.4868 3.07514,-2.10405"
            id="path5592"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.70125,225.41744 2.34682,-1.78035"
            id="path5594"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.96715,226.14576 3.80346,-3.07514"
            id="path5596"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 111.66079,226.55039 2.26589,-2.10405"
            id="path5598"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g5658"
        inkscape:label="floor17"
        @click="_locationStore.setSelected(_floor17), (_openInfoRight = false)"
      >
        <path
          inkscape:label="FillFloor17"
          id="fillFloor17"
          d="m 10.658646,20.311678 -0.01188,-0.697147 1.591506,-0.136918 0.06684,-0.160724 2.083004,-0.235314 1.849968,0.247766 0.266538,-0.03933 2.460411,0.692741 0.395869,0.236557 0.01159,0.558383 -2.849274,-0.814678 -0.322909,0.03523 -1.802843,-0.197092 -2.113164,0.252867 -0.07339,0.105679 z"
          class="fillInactive"
          :class="{ fillActive: _isSelected.id === 'b1f17' }"
        >
          <title id="title2590">Fill Floor17</title>
        </path>
        <g id="g5656" transform="matrix(0.09784391,0,0,0.09784391,4.3640785,-2.3692768)">
          <path
            sodipodi:nodetypes="ccccccccccc"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 64.332748,231.80753 -0.121387,-7.1251 16.265765,-1.39934 0.683161,-1.64266 21.289003,-2.405 18.90739,2.53226 2.72411,-0.40192 25.14629,7.08006 1.13557,0.54261 2.91035,1.87508 0.1185,5.70688"
            id="path5604"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 64.404112,225.54894 16.450294,-1.29854 0.572109,-1.1657 21.111025,-2.49433 18.323,2.19325 3.09114,-0.50265 14.2206,3.8088"
            id="path5606"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 68.551449,230.07772 -0.119917,-4.15715"
            id="path5608"
          />
          <path
            id="path5610"
            d="m 72.491684,229.55487 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5612"
            d="m 75.809896,229.59974 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5614"
            d="m 78.722503,229.35381 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5616"
            d="M 80.974323,228.40755 80.854406,224.2504"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5618"
            d="m 83.402231,227.36679 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5620"
            d="M 85.518327,227.41607 85.39841,223.25892"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5622"
            d="M 90.076667,226.88908 89.95675,222.73193"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5624"
            d="m 92.518421,226.53227 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5626"
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5628"
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5630"
            d="m 109.02512,226.80424 -0.11991,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5632"
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5634"
            d="m 121.01689,227.16399 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5636"
            d="m 124.33461,226.96413 -0.11992,-4.15715"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="cc"
            id="path5638"
            d="m 102.54494,226.58978 -0.0956,-7.35435"
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5640"
            d="m 126.55095,227.11686 3.47976,-2.02312"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5642"
            d="m 128.33129,228.00703 5.17919,-2.67051"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5644"
            d="m 130.75904,228.41166 4.61271,-2.50867"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5646"
            d="m 138.93244,230.192 4.93641,-2.83236"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5648"
            d="m 145.9729,231.4868 3.07514,-2.10405"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5650"
            d="m 104.70125,225.41744 2.34682,-1.78035"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5652"
            d="m 106.96715,226.14576 3.80346,-3.07514"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5654"
            d="m 111.66079,226.55039 2.26589,-2.10405"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
        </g>
        <path
          inkscape:label="FloorLabelPath17"
          id="pathFloorLabel17"
          d="M 10.49811,19.939921 H -100"
          style="
            stroke-width: 0.0675116;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
          "
          class="floorLabelPath"
          :class="{ floorLabelPathActive: _isSelected.id === 'b1f17' }"
        />
        <text
          transform="scale(1.1984459,0.83441397)"
          inkscape:label="FloorLabel17"
          id="labelFloor17"
          y="24.745068"
          x="4.5"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 0.79375px;
            line-height: 1.25;
            font-family: sans-serif;
            display: inline;
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.00389776;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
          "
          xml:space="preserve"
        >
          <tspan
            style="
              font-size: 0.79375px;
              stroke-width: 0.00389776;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
            "
            y="24.745068"
            x="4.5"
            id="tspan2226-98"
            sodipodi:role="line"
            v-if="_isSelected.id != 'b1f17'"
          >
          {{ _floor17.title }}
          </tspan>
        </text>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floor18"
        id="g5714"
        inkscape:groupmode="layer"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.3640785,-3.0941368)" id="g5712">
          <path
            id="path5660"
            d="m 64.211361,232.09077 0.06069,-6.49854 16.433961,-2.02303 0.690314,-0.73425 21.103544,-2.58796 18.94152,2.82931 2.81219,-0.31076 23.71917,7.29878 2.10666,0.90677 3.15313,1.67277 0.0404,5.628"
            style="
              stroke-width: 0.529167;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccccccccccc"
          />
          <path
            sodipodi:nodetypes="ccccccc"
            id="path5662"
            d="m 64.118,226.35005 16.736406,-2.09965 0.563729,-0.65764 21.099175,-2.75962 18.87559,2.81457 2.8361,-0.34003 13.15427,3.9555"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            id="path5664"
            d="m 68.551449,230.07772 -0.119917,-4.15715"
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 72.491684,229.55487 -0.119917,-4.15715"
            id="path5666"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 75.809896,229.59974 -0.119917,-4.15715"
            id="path5668"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 78.722503,229.35381 -0.119917,-4.15715"
            id="path5670"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 80.974323,228.40755 80.854406,224.2504"
            id="path5672"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 83.402231,227.36679 -0.119917,-4.15715"
            id="path5674"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 85.518327,227.41607 85.39841,223.25892"
            id="path5676"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 90.076667,226.88908 89.95675,222.73193"
            id="path5678"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 92.518421,226.53227 -0.119917,-4.15715"
            id="path5680"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 97.113305,226.60438 -0.119917,-4.15715"
            id="path5682"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 99.55163,226.24462 -0.119917,-4.15715"
            id="path5684"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 109.67252,227.04701 -0.11991,-4.15715"
            id="path5686"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 115.22087,226.96413 -0.11992,-4.15715"
            id="path5688"
          />
          <path
            sodipodi:nodetypes="cc"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 121.30013,228.0137 0.0928,-4.36599"
            id="path5690"
          />
          <path
            sodipodi:nodetypes="cc"
            style="
              display: inline;

              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 124.23447,228.12288 -0.005,-4.8152"
            id="path5692"
          />
          <path
            style="
              display: inline;

              stroke-width: 0.8172;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 102.54494,226.58978 -0.0276,-5.75664"
            id="path5694"
            sodipodi:nodetypes="cc"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 125.418,227.7238 3.47976,-2.02312"
            id="path5696"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 126.91511,228.8972 5.17919,-2.67051"
            id="path5698"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 129.26193,229.66599 4.61271,-2.50867"
            id="path5700"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 136.90932,231.4868 4.93641,-2.83236"
            id="path5702"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 143.54516,233.06483 3.07514,-2.10405"
            id="path5704"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 104.70125,225.41744 2.34682,-1.78035"
            id="path5706"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 106.96715,226.14576 3.80346,-3.07514"
            id="path5708"
          />
          <path
            style="
              stroke-width: 0.264583px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="m 111.66079,226.55039 2.26589,-2.10405"
            id="path5710"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor19"
        id="layer12"
        inkscape:groupmode="layer"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,4.8396932)" id="g6408">
          <g id="g6145">
            <path
              id="path5717"
              d="m 63.801921,144.50561 0.0882,-5.23405 16.346808,-2.5896 0.52601,-0.52601 21.606911,-3.56069 25.12715,5.01734 2.75144,-0.28324 21.64738,7.76878 -0.12138,3.68208 1.61849,0.80925 0.16185,1.61849 -0.79237,0.34928"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path5719"
              d="m 68.381445,143.39872 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,142.89294 0.04046,-4.24855"
              id="path5719-3"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,142.28601 0.04046,-4.24855"
              id="path5719-9"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,141.67907 0.04046,-4.24855"
              id="path5719-92"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,141.27445 0.04046,-4.24855"
              id="path5719-0"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,140.74843 0.04046,-4.24855"
              id="path5719-5"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,140.1415 0.04046,-4.24855"
              id="path5719-6"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path5719-8"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.291833,139.25133 0.04046,-4.24855"
              id="path5719-2"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.153103,138.92763 0.04046,-4.24855"
              id="path5719-4"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,138.76578 0.04046,-4.24855"
              id="path5719-34"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,138.36115 0.04046,-4.24855"
              id="path5719-7"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,138.36115 0.0405,-4.24855"
              id="path5719-73"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,138.8467 0.0405,-4.24855"
              id="path5719-21"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,139.41318 0.0405,-4.24855"
              id="path5719-49"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,139.4941 0.0405,-4.24855"
              id="path5719-50"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,139.8178 0.0405,-4.24855"
              id="path5719-81"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,140.10104 0.0405,-4.24855"
              id="path5719-09"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,140.66751 0.0405,-4.24855"
              id="path5719-80"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,141.07214 0.0405,-4.24855"
              id="path5719-1"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,142.52878 0.0405,-4.24855"
              id="path5719-95"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,143.33803 0.0405,-4.24855"
              id="path5719-28"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,143.82358 0.0405,-4.24855"
              id="path5719-08"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,144.99699 0.0405,-4.24855"
              id="path5719-23"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,145.48254 0.0405,-4.24855"
              id="path5719-36"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.67907,146.61548 0.0405,-4.24855"
              id="path5719-61"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,146.89872 0.0405,-4.24855"
              id="path5719-88"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,147.42473 0.0405,-4.24855"
              id="path5719-78"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 147.1415,148.19352 0.0405,-4.24855"
              id="path5719-03"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,148.75999 0.0405,-4.24855"
              id="path5719-83"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,149.77155 0.0405,-4.24855"
              id="path5719-47"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,140.93766 0.0405,-4.24855"
              id="path5719-17"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,137.02819 0.0417,1.89715"
              id="path5719-31"
            />
            <path
              id="path5719-31-0"
              d="m 125.33165,137.71605 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path5991"
              d="m 121.09615,139.82618 2.5902,-0.2892 6.56212,1.61608"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path6012"
              d="m 127.49701,140.48543 -1e-5,-2.87283 2.75147,-0.28324 v 3.8237 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path5719-31-1"
              d="m 123.69382,139.67663 0.0423,1.49461"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path6227-5"
            d="m 121.04325,141.27566 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:groupmode="layer"
        id="g6225"
        inkscape:label="floor20"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,4.7879132)" id="g6366">
          <g id="g6223" transform="translate(0,-5.2916669)">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.890121,145.09239 -0.0073,-6.60361 16.354083,-2.25191 0.18208,-0.93889 21.869926,-3.95705 25.20806,5.90751 2.95375,-0.41474 21.44508,8.26444 0.0789,3.05263 1.6471,0.80925 -0.067,1.93322 -1.65897,-0.50343"
              id="path6147"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,143.39872 0.04046,-4.24855"
              id="path6149"
            />
            <path
              id="path6151"
              d="m 72.650229,142.89294 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6153"
              d="m 75.158898,142.28601 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6155"
              d="m 77.546179,141.67907 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6157"
              d="m 80.419009,141.27445 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6159"
              d="m 82.846752,140.74843 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6161"
              d="m 84.910335,140.1415 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6163"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6165"
              d="m 90.291833,139.25133 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6167"
              d="m 92.153103,138.92763 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6169"
              d="m 96.765816,138.76578 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6171"
              d="m 98.910323,138.36115 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6173"
              d="m 104.33228,138.36115 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6175"
              d="m 106.63864,138.8467 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6177"
              d="m 109.18777,139.41318 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6179"
              d="m 110.7658,139.4941 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6181"
              d="m 112.50569,139.8178 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6183"
              d="m 114.69066,140.10104 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6185"
              d="m 117.15886,140.66751 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6187"
              d="m 118.97967,141.07214 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6189"
              d="m 130.43053,142.52878 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6191"
              d="m 132.65596,143.33803 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6193"
              d="m 134.92185,143.82358 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6195"
              d="m 137.51145,144.99699 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6197"
              d="m 139.45364,145.48254 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6199"
              d="m 141.67907,146.61548 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6201"
              d="m 143.62127,146.89872 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6203"
              d="m 145.56346,147.42473 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6205"
              d="m 147.1415,148.19352 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6207"
              d="m 148.59814,148.75999 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6209"
              d="m 150.49987,149.77155 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6211"
              d="m 120.97126,140.93766 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6213"
              d="m 122.94439,137.02819 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,137.71605 0.0417,1.89715"
              id="path6215"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.09615,139.82618 2.5902,-0.2892 6.56212,1.61608"
              id="path6217"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.49701,140.48543 -1e-5,-2.87283 2.75147,-0.28324 v 3.8237 z"
              id="path6219"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.69382,139.67663 0.0423,1.49461"
              id="path6221"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path6227"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor21"
        id="g6324"
        inkscape:groupmode="layer"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,4.8396932)" id="g6466">
          <g transform="translate(0,-10.583334)" id="g6320">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path6244"
              d="m 63.882846,143.25128 0.04776,-5.84099 16.407502,-2.65029 0.596521,-1.57962 21.435241,-2.8168 25.35605,5.81846 2.69421,-0.51213 21.53293,8.85601 0.0217,3.62485 1.6471,0.80925 -0.067,1.93322 -1.65896,-0.50343"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6246"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path6248"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path6250"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path6252"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path6254"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path6256"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path6258"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path6260"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path6262"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path6264"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path6266"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path6268"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path6270"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path6272"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path6274"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path6276"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path6278"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path6280"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path6282"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path6284"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path6286"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path6288"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path6290"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path6292"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,143.89503 0.0405,-4.24855"
              id="path6294"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.67907,145.02797 0.0405,-4.24855"
              id="path6296"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,145.31121 0.0405,-4.24855"
              id="path6298"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,146.36639 0.0405,-4.24855"
              id="path6300"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 147.1415,147.13518 0.0405,-4.24855"
              id="path6302"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,147.70165 0.0405,-4.24855"
              id="path6304"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,148.18404 0.0405,-4.24855"
              id="path6306"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path6308"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path6310"
            />
            <path
              id="path6312"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path6314"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path6316"
              d="m 127.68155,139.28747 0.0444,-3.10543 2.69422,-0.51213 0.039,4.34163 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path6318"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path6322"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path6227-1"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g6552"
        inkscape:label="floor22"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,4.2701632)" id="g6550">
          <g id="g6544" transform="translate(0,-10.583334)">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.882846,143.25128 0.04776,-5.84099 16.407502,-2.65029 0.596521,-1.57962 21.435241,-2.8168 25.35605,5.81846 2.69421,-0.51213 21.53293,8.85601 0.0217,3.62485 1.6471,0.80925 -0.067,1.93322 -1.65896,-0.50343"
              id="path6468"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path6470"
            />
            <path
              id="path6472"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6474"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6476"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6478"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6480"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6482"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6484"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6486"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6488"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6490"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6492"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6494"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6496"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6498"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6500"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6502"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6504"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6506"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6508"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6510"
              d="m 130.43053,140.4121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6512"
              d="m 132.65596,141.22135 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6514"
              d="m 134.92185,142.23607 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6516"
              d="m 137.51145,143.40948 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6518"
              d="m 139.45364,143.89503 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6520"
              d="m 141.67907,145.02797 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6522"
              d="m 143.62127,145.31121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6524"
              d="m 145.56346,146.36639 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6526"
              d="m 147.1415,147.13518 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6528"
              d="m 148.59814,147.70165 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6530"
              d="m 150.49987,148.18404 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6532"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6534"
              d="m 122.94439,135.44068 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,136.12854 0.0417,1.89715"
              id="path6536"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              id="path6538"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.68155,139.28747 0.0444,-3.10543 2.69422,-0.51213 0.039,4.34163 z"
              id="path6540"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path6542"
              sodipodi:nodetypes="cc"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path6546"
          />
          <path
            id="path6548"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor23"
        id="g6638"
        inkscape:groupmode="layer"
      >
        <g id="g6636" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,3.7006232)">
          <g transform="translate(0,-10.583334)" id="g6630">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path6554"
              d="m 63.882846,143.25128 0.04776,-5.84099 16.407502,-2.65029 0.596521,-1.57962 21.273391,-3.93586 25.58946,6.43682 2.57973,-0.51213 21.61631,9.59948 -0.0188,3.38208 1.6471,0.80925 -0.067,1.93322 -1.65896,-0.50343"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6556"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path6558"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path6560"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path6562"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path6564"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path6566"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path6568"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path6570"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path6572"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path6574"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path6576"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path6578"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path6580"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path6582"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path6584"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path6586"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path6588"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path6590"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path6592"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path6594"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path6596"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path6598"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path6600"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path6602"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,143.89503 0.0405,-4.24855"
              id="path6604"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.67907,145.02797 0.0405,-4.24855"
              id="path6606"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,145.31121 0.0405,-4.24855"
              id="path6608"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,146.36639 0.0405,-4.24855"
              id="path6610"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 147.1415,147.13518 0.0405,-4.24855"
              id="path6612"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,147.70165 0.0405,-4.24855"
              id="path6614"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,148.18404 0.0405,-4.24855"
              id="path6616"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path6618"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path6620"
            />
            <path
              id="path6622"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path6624"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path6626"
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path6628"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path6632"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path6634"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g6724"
        inkscape:label="floor24"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,3.0275432)" id="g6722">
          <g id="g6716" transform="translate(0,-10.583334)">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.930606,144.28946 v -6.87917 l 16.407502,-2.65029 0.596521,-1.57962 21.273391,-3.93586 25.58946,6.43682 2.57973,-0.51213 21.61631,10.45782 0.0384,3.89708 1.81877,1.03814 -0.12422,1.93322 -1.73297,-0.84761"
              id="path6640"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path6642"
            />
            <path
              id="path6644"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6646"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6648"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6650"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6652"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6654"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6656"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6658"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6660"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6662"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6664"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6666"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6668"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6670"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6672"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6674"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6676"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6678"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6680"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6682"
              d="m 130.43053,140.4121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6684"
              d="m 132.65596,141.22135 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6686"
              d="m 134.92185,142.23607 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6688"
              d="m 137.51145,143.40948 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6690"
              d="m 139.45364,143.89503 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6692"
              d="m 141.62185,145.60019 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6694"
              d="m 143.62127,146.45566 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6696"
              d="m 145.56346,147.28195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6698"
              d="m 146.96983,147.99352 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6700"
              d="m 148.59814,148.27387 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6702"
              d="m 150.49987,149.50016 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6704"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path6706"
              d="m 122.94439,135.44068 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,136.12854 0.0417,1.89715"
              id="path6708"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              id="path6710"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              id="path6712"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path6714"
              sodipodi:nodetypes="cc"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path6718"
          />
          <path
            id="path6720"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor25"
        id="g8342"
        inkscape:groupmode="layer"
      >
        <g id="g8340" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,2.4580132)">
          <g transform="translate(0,-10.583334)" id="g8334">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path8258"
              d="m 63.930606,144.28946 v -6.87917 l 16.407502,-2.65029 0.596521,-1.57962 21.273391,-3.93586 25.58946,6.43682 2.57973,-0.51213 21.61631,10.45782 0.0384,3.89708 1.81877,1.03814 -0.12422,1.93322 -1.73295,-1.0476"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8260"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path8262"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path8264"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path8266"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path8268"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path8270"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path8272"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path8274"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path8276"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path8278"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path8280"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path8282"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path8284"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path8286"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path8288"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path8290"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path8292"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path8294"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path8296"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path8298"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path8300"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path8302"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path8304"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path8306"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,143.89503 0.0405,-4.24855"
              id="path8308"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.62185,145.60019 0.0405,-4.24855"
              id="path8310"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,146.45566 0.0405,-4.24855"
              id="path8312"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,147.28195 0.0405,-4.24855"
              id="path8314"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 146.96983,147.99352 0.0405,-4.24855"
              id="path8316"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,148.27387 0.0405,-4.24855"
              id="path8318"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,149.50016 0.0405,-4.24855"
              id="path8320"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path8322"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path8324"
            />
            <path
              id="path8326"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path8328"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path8330"
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path8332"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path8336"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path8338"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g8428"
        inkscape:label="floor26"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,1.8367032)" id="g8426">
          <g id="g8420" transform="translate(0,-10.583334)">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.930606,144.28946 v -6.87917 l 16.407502,-2.65029 0.596521,-1.57962 21.273391,-3.93586 25.58946,6.43682 2.57973,-0.51213 21.47938,11.4848 0.17533,2.8701 1.81877,1.03814 -0.12422,1.93322 -1.73295,-0.51844"
              id="path8344"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path8346"
            />
            <path
              id="path8348"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8350"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8352"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8354"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8356"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8358"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8360"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8362"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8364"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8366"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8368"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8370"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8372"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8374"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8376"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8378"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8380"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8382"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8384"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8386"
              d="m 130.43053,140.4121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8388"
              d="m 132.65596,141.22135 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8390"
              d="m 134.92185,142.23607 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8392"
              d="m 137.51145,143.40948 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8394"
              d="m 139.45364,143.89503 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8396"
              d="m 141.62185,145.60019 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8398"
              d="m 143.62127,146.45566 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8400"
              d="m 145.56346,147.28195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8402"
              d="m 146.96983,147.99352 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8404"
              d="m 148.59814,149.33221 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8406"
              d="m 150.49987,150.5585 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8408"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path8410"
              d="m 122.94439,135.44068 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,136.12854 0.0417,1.89715"
              id="path8412"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              id="path8414"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              id="path8416"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path8418"
              sodipodi:nodetypes="cc"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path8422"
          />
          <path
            id="path8424"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor27"
        id="g10132"
        inkscape:groupmode="layer"
      >
        <g id="g10130" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,1.2153932)">
          <g style="opacity: 0.997" transform="translate(0,-10.583334)" id="g10124">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path10048"
              d="m 63.930606,144.28946 v -5.48659 l 16.161753,-3.46945 0.760354,-1.49771 21.437227,-4.18161 25.50754,6.02724 2.57929,-0.51213 21.70509,12.38588 0.0934,3.32064 1.55255,1.05862 -0.0423,1.91274 -1.82892,-0.84308"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path10050"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path10052"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path10054"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path10056"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path10058"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path10060"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path10062"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path10064"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path10066"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path10068"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path10070"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path10072"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path10074"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path10076"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path10078"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path10080"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path10082"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path10084"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path10086"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path10088"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path10090"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path10092"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path10094"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path10096"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,144.95337 0.0405,-4.24855"
              id="path10098"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.62185,146.12936 0.0405,-4.24855"
              id="path10100"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,147.514 0.0405,-4.24855"
              id="path10102"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,148.34029 0.0405,-4.24855"
              id="path10104"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 146.96983,149.05186 0.0405,-4.24855"
              id="path10106"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,150.39055 0.0405,-4.24855"
              id="path10108"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,151.61684 0.0405,-4.24855"
              id="path10110"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path10112"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path10114"
            />
            <path
              id="path10116"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path10118"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path10120"
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path10122"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path10126"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path10128"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g11879"
        inkscape:label="floor28"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,0.59408324)" id="g11877">
          <g id="g11871" transform="translate(0,-10.583334)" style="opacity: 0.997">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.437227,-4.18161 25.50754,6.02724 2.62261,-0.28689 21.72303,12.12389 -0.0659,3.74943 1.60155,0.8136 -0.14031,2.40279 -1.55464,-0.72608"
              id="path11795"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path11797"
            />
            <path
              id="path11799"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11801"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11803"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11805"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11807"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11809"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11811"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11813"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11815"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11817"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11819"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11821"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11823"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11825"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11827"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11829"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11831"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11833"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11835"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11837"
              d="m 130.43053,140.4121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11839"
              d="m 132.65596,141.22135 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11841"
              d="m 134.92185,142.23607 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11843"
              d="m 137.51145,143.40948 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11845"
              d="m 139.45364,144.95337 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11847"
              d="m 141.62185,146.12936 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11849"
              d="m 143.62127,147.514 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11851"
              d="m 145.56346,148.34029 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11853"
              d="m 146.96983,149.05186 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11855"
              d="m 148.59814,150.39055 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11857"
              d="m 150.49987,151.61684 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11859"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11861"
              d="m 122.94439,135.44068 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,136.12854 0.0417,1.89715"
              id="path11863"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              id="path11865"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              id="path11867"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path11869"
              sodipodi:nodetypes="cc"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path11873"
          />
          <path
            id="path11875"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor29"
        id="g11965"
        inkscape:groupmode="layer"
      >
        <g id="g11963" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,-0.02722676)">
          <g style="opacity: 0.997" transform="translate(0,-10.583334)" id="g11957">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path11881"
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.437227,-4.18161 25.50754,6.02724 2.62261,-0.28689 21.72303,12.12389 -0.0659,3.74943 1.60155,0.8136 -0.14031,2.40279 -1.55464,-0.72608"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11883"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path11885"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path11887"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path11889"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path11891"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path11893"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path11895"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path11897"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path11899"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path11901"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path11903"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path11905"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path11907"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path11909"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path11911"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path11913"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path11915"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path11917"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path11919"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path11921"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path11923"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path11925"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path11927"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path11929"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,144.95337 0.0405,-4.24855"
              id="path11931"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.62185,146.12936 0.0405,-4.24855"
              id="path11933"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,147.514 0.0405,-4.24855"
              id="path11935"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,148.34029 0.0405,-4.24855"
              id="path11937"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 146.96983,149.05186 0.0405,-4.24855"
              id="path11939"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,150.39055 0.0405,-4.24855"
              id="path11941"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,151.61684 0.0405,-4.24855"
              id="path11943"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path11945"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path11947"
            />
            <path
              id="path11949"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path11951"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path11953"
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path11955"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path11959"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path11961"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g12051"
        inkscape:label="floor30"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,-0.64853676)" id="g12049">
          <g id="g12043" transform="translate(0,-10.583334)" style="opacity: 0.997">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.437227,-4.18161 25.50754,6.02724 2.62261,-0.28689 21.72303,12.12389 -0.0659,3.74943 1.60155,0.8136 -0.14031,2.40279 -1.55464,-0.72608"
              id="path11967"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path11969"
            />
            <path
              id="path11971"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11973"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11975"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11977"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11979"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11981"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11983"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11985"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11987"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11989"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11991"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11993"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11995"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11997"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path11999"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12001"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12003"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12005"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12007"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12009"
              d="m 130.43053,140.4121 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12011"
              d="m 132.65596,141.22135 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12013"
              d="m 134.92185,142.23607 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12015"
              d="m 137.51145,143.40948 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12017"
              d="m 139.45364,144.95337 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12019"
              d="m 141.62185,146.12936 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12021"
              d="m 143.62127,147.514 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12023"
              d="m 145.56346,148.34029 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12025"
              d="m 146.96983,149.05186 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12027"
              d="m 148.59814,150.39055 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12029"
              d="m 150.49987,151.61684 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12031"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12033"
              d="m 122.94439,135.44068 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.33165,136.12854 0.0417,1.89715"
              id="path12035"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              id="path12037"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.68155,139.28747 0.001,-3.60613 2.69422,-0.51213 0.082,4.84233 z"
              id="path12039"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path12041"
              sodipodi:nodetypes="cc"
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path12045"
          />
          <path
            id="path12047"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor31"
        id="g12137"
        inkscape:groupmode="layer"
      >
        <g id="g12135" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,-1.2698468)">
          <g style="opacity: 0.997" transform="translate(0,-10.583334)" id="g12129">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path12053"
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.437227,-4.18161 25.50754,6.02724 2.67355,0.48221 21.67209,11.35479 -0.0659,3.74943 1.60155,0.8136 -0.14031,2.40279 -1.55464,-0.72608"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12055"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path12057"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path12059"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path12061"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path12063"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path12065"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path12067"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path12069"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path12071"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path12073"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path12075"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path12077"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path12079"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path12081"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path12083"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path12085"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path12087"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path12089"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path12091"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path12093"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.43053,140.4121 0.0405,-4.24855"
              id="path12095"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 132.65596,141.22135 0.0405,-4.24855"
              id="path12097"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.92185,142.23607 0.0405,-4.24855"
              id="path12099"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 137.51145,143.40948 0.0405,-4.24855"
              id="path12101"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,144.95337 0.0405,-4.24855"
              id="path12103"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.62185,146.12936 0.0405,-4.24855"
              id="path12105"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,147.514 0.0405,-4.24855"
              id="path12107"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,148.34029 0.0405,-4.24855"
              id="path12109"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 146.96983,149.05186 0.0405,-4.24855"
              id="path12111"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,150.39055 0.0405,-4.24855"
              id="path12113"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,151.61684 0.0405,-4.24855"
              id="path12115"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path12117"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.94439,135.44068 0.0417,1.89715"
              id="path12119"
            />
            <path
              id="path12121"
              d="m 125.33165,136.12854 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path12123"
              d="m 121.01031,138.8534 2.47384,-0.43236 6.97499,1.5905"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path12125"
              d="m 127.68155,139.28747 0.001,-3.60613 2.78848,0.48221 -0.0123,3.84799 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path12127"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            id="path12131"
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
          />
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.05709,129.86794 2.46699,-0.42663 6.69979,1.42517"
            id="path12133"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:groupmode="layer"
        id="g12223"
        inkscape:label="floor32"
        style="display: inline"
      >
        <g transform="matrix(0.09784391,0,0,0.09784391,4.4100775,-1.8911568)" id="g12221">
          <g id="g12215" transform="translate(0,-10.583334)" style="opacity: 0.997">
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.367927,-5.56769 31.83153,11.53691 2.70924,-0.37352 15.20845,9.61162 0.10736,2.98708 2.05203,1.5413 -0.20962,2.09092 -1.93581,-1.90425"
              id="path12139"
              sodipodi:nodetypes="cccccccccccc"
            />
            <path
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 68.381445,142.34858 0.04046,-3.19841"
              id="path12141"
            />
            <path
              id="path12143"
              d="m 72.650229,141.25783 0.04046,-2.61344"
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12145"
              d="m 75.158898,140.3392 0.04046,-2.30174"
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12147"
              d="m 77.546179,140.06105 0.04046,-2.63053"
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12149"
              d="m 80.419009,140.06048 0.04046,-3.03458"
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12151"
              d="m 82.846752,138.98798 0.04046,-2.4881"
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12153"
              d="m 84.910335,138.40213 0.04046,-2.50918"
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12155"
              d="m 87.621315,139.8178 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12157"
              d="m 90.251371,137.34998 0.04046,-2.95414"
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12159"
              d="m 92.193565,136.95082 0.04046,-3.32376"
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12161"
              d="m 96.765816,136.11993 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12163"
              d="m 98.910323,135.7153 0.04046,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12165"
              d="m 104.33228,135.7153 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12167"
              d="m 106.63864,136.20085 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12169"
              d="m 109.18777,136.76733 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12171"
              d="m 110.7658,136.84825 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12173"
              d="m 112.50569,137.17195 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12175"
              d="m 114.69066,137.98436 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12177"
              d="m 117.15886,138.55083 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12179"
              d="m 118.97967,138.95546 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12187"
              d="m 136.72091,143.67996 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12189"
              d="m 139.45364,146.01171 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12191"
              d="m 141.62185,147.1877 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12193"
              d="m 143.62127,148.57234 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12195"
              d="m 145.56346,149.39863 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12197"
              d="m 146.96983,150.1102 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12199"
              d="m 148.59814,151.44889 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12201"
              d="m 150.49987,152.67518 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12203"
              d="m 120.97126,139.35015 0.0405,-4.24855"
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12205"
              d="m 122.92706,136.01244 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 125.34898,136.78693 0.0417,1.89715"
              id="path12207"
            />
            <path
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
              d="m 121.01031,138.8534 2.47384,-0.43236 13.23676,5.25892"
              id="path12209"
              sodipodi:nodetypes="ccc"
            />
            <path
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.225205px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 134.19465,142.58729 -0.12746,-2.78485 2.69422,-0.37103 -0.0405,4.24855 z"
              id="path12211"
              sodipodi:nodetypes="ccccc"
            />
            <path
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.55568,138.93604 -0.0316,1.0886"
              id="path12213"
              sodipodi:nodetypes="cc"
            />
            <path
              id="path12207-0"
              d="m 127.91444,137.64678 0.0417,1.89715"
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12207-5"
              d="m 131.0158,138.65169 0.0417,1.89715"
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              id="path12207-04"
              d="m 133.09492,139.39671 0.0417,1.89715"
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
          </g>
          <path
            style="
              stroke-width: 0.265;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 121.04325,135.98399 2.69287,-0.10442 6.69441,1.35754"
            id="path12217"
          />
          <path
            id="path12219"
            d="m 121.05709,129.86794 2.46699,-0.42663 6.94695,2.48891"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:nodetypes="ccc"
          />
        </g>
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        style="display: inline"
        inkscape:label="floor33"
        id="g14212"
        inkscape:groupmode="layer"
      >
        <g id="g14210" transform="matrix(0.09784391,0,0,0.09784391,4.4100775,-2.5124668)">
          <g style="opacity: 0.997" transform="translate(0,-10.583334)" id="g14204">
            <path
              sodipodi:nodetypes="cccccccccccc"
              id="path14128"
              d="m 63.930606,145.15287 v -6.35 l 16.161753,-3.46945 0.760354,-1.49771 21.989827,-6.93588 31.20963,12.9051 2.70924,-0.37352 15.50162,8.90802 -0.12718,4.86335 1.87613,1.1895 0.0836,2.44272 -2.12567,-1.44197"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              id="path14130"
              d="m 68.381445,142.34858 0.04046,-3.19841"
              style="
                stroke-width: 0.229566px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                stroke-width: 0.207514px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 72.650229,141.25783 0.04046,-2.61344"
              id="path14132"
            />
            <path
              style="
                stroke-width: 0.194746px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 75.158898,140.3392 0.04046,-2.30174"
              id="path14134"
            />
            <path
              style="
                stroke-width: 0.208192px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 77.546179,140.06105 0.04046,-2.63053"
              id="path14136"
            />
            <path
              style="
                stroke-width: 0.22361px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 80.419009,140.06048 0.04046,-3.03458"
              id="path14138"
            />
            <path
              style="
                stroke-width: 0.202477px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 82.846752,138.98798 0.04046,-2.4881"
              id="path14140"
            />
            <path
              style="
                stroke-width: 0.203333px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 84.910335,138.40213 0.04046,-2.50918"
              id="path14142"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 87.621315,139.8178 0.04046,-4.24855"
              id="path14144"
            />
            <path
              style="
                stroke-width: 0.220626px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 90.251371,137.34998 0.04046,-2.95414"
              id="path14146"
            />
            <path
              style="
                stroke-width: 0.234022px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 92.193565,136.95082 0.04046,-3.32376"
              id="path14148"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 96.765816,136.11993 0.04046,-4.24855"
              id="path14150"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 98.910323,135.7153 0.04046,-4.24855"
              id="path14152"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 104.33228,135.7153 0.0405,-4.24855"
              id="path14154"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 106.63864,136.20085 0.0405,-4.24855"
              id="path14156"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 109.18777,136.76733 0.0405,-4.24855"
              id="path14158"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 110.7658,136.84825 0.0405,-4.24855"
              id="path14160"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 112.50569,137.17195 0.0405,-4.24855"
              id="path14162"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 114.69066,137.98436 0.0405,-4.24855"
              id="path14164"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 117.15886,138.55083 0.0405,-4.24855"
              id="path14166"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 118.97967,138.95546 0.0405,-4.24855"
              id="path14168"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 136.72091,143.67996 0.0405,-4.24855"
              id="path14170"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 139.45364,146.01171 0.0405,-4.24855"
              id="path14172"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 141.62185,147.1877 0.0405,-4.24855"
              id="path14174"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 143.62127,148.57234 0.0405,-4.24855"
              id="path14176"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 145.56346,149.39863 0.0405,-4.24855"
              id="path14178"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 146.96983,150.1102 0.0405,-4.24855"
              id="path14180"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 148.59814,151.44889 0.0405,-4.24855"
              id="path14182"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 150.49987,152.67518 0.0405,-4.24855"
              id="path14184"
            />
            <path
              style="
                stroke-width: 0.264583px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 120.97126,139.35015 0.0405,-4.24855"
              id="path14186"
            />
            <path
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 122.92706,136.01244 0.0417,1.89715"
              id="path14188"
            />
            <path
              id="path14190"
              d="m 125.34898,136.78693 0.0417,1.89715"
              style="
                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccc"
              id="path14192"
              d="m 121.01031,138.8534 2.47384,-0.43236 13.23676,5.25892"
              style="
                stroke-width: 0.529167;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-dasharray: none;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="ccccc"
              id="path14194"
              d="m 134.19465,142.58729 -0.12746,-2.78485 2.69422,-0.37103 -0.0405,4.24855 z"
              style="
                fill: #000000;
                fill-opacity: 0.405622;
                stroke: none;
                stroke-width: 0.225205px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              sodipodi:nodetypes="cc"
              id="path14196"
              d="m 123.55568,138.93604 -0.0316,1.0886"
              style="
                stroke-width: 0.160399px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
            />
            <path
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 127.91444,137.64678 0.0417,1.89715"
              id="path14198"
            />
            <path
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 131.0158,138.65169 0.0417,1.89715"
              id="path14200"
            />
            <path
              style="
                display: inline;
                opacity: 0.997;

                stroke-width: 0.179417px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 133.09492,139.39671 0.0417,1.89715"
              id="path14202"
            />
          </g>
          <path
            sodipodi:nodetypes="ccc"
            style="
              display: inline;

              stroke-width: 0.264999;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="m 120.96914,129.86794 2.55494,-0.42663 13.23733,5.75677"
            id="path14208"
          />
        </g>
        <path
          id="path14214"
          d="M 17.791351,10.094533 14.472599,8.8683932"
          style="
            stroke-width: 0.0258878px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
        />
      </g>
      <g
        transform="translate(-1.9512227,-6.5065168)"
        inkscape:label="floorRoof"
        id="layer13"
        inkscape:groupmode="layer"
      >
        <path
          id="path14217"
          d="m 10.665297,10.033033 1.1e-4,-1.0961498 1.565861,-0.77076 -0.008,-0.36509 2.247371,-1.26567 1.168311,0.50302 0.63284,0.3651 1.403591,1.00604 1.32246,1.18453 0.35698,0.38133 -0.0466,0.9907498"
          style="
            stroke-width: 0.0517758;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          id="path14219"
          d="m 11.103507,9.8131132 -0.0325,-0.89245"
          style="
            stroke-width: 0.0258878px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
        />
        <path
          style="
            stroke-width: 0.0258878px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 11.436157,9.6346232 -0.0325,-0.89246"
          id="path14219-7"
        />
        <path
          style="
            stroke-width: 0.0281417px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 11.784898,9.5698832 -0.0322,-1.06317"
          id="path14219-9"
        />
        <path
          style="
            stroke-width: 0.0278325px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 12.020198,9.4075932 -0.0322,-1.03878"
          id="path14219-3"
        />
        <path
          style="
            stroke-width: 0.0303814px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 12.296068,9.3942632 -0.0323,-1.23637"
          id="path14219-5"
        />
        <path
          style="
            stroke-width: 0.033596px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 12.531308,9.3250032 -0.0322,-1.51607"
          id="path14219-52"
        />
        <path
          style="
            stroke-width: 0.0341675px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 12.798918,9.2589732 -0.0319,-1.58001"
          id="path14219-6"
        />
        <path
          style="
            stroke-width: 0.0349711px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 13.034308,9.1530732 -0.0321,-1.64437"
          id="path14219-1"
        />
        <path
          style="
            stroke-width: 0.0353285px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 13.285758,9.0792932 -0.032,-1.68427"
          id="path14219-2"
        />
        <path
          style="
            stroke-width: 0.034693px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 13.399228,8.9746632 -0.0318,-1.63659"
          id="path14219-73"
        />
        <path
          style="
            stroke-width: 0.0358651px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 13.658808,8.9049332 -0.0317,-1.75355"
          id="path14219-24"
        />
        <path
          style="
            stroke-width: 0.0353216px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 13.910359,8.7101732 -0.0318,-1.69669"
          id="path14219-21"
        />
        <path
          style="
            stroke-width: 0.0364506px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 14.153639,8.7356932 -0.0315,-1.81974"
          id="path14219-17"
        />
        <path
          style="
            stroke-width: 0.0387501px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 14.389079,8.7344232 -0.0319,-2.03733"
          id="path14219-63"
        />
        <path
          style="
            stroke-width: 0.0370903px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 14.656599,8.6699832 -0.0314,-1.8921"
          id="path14219-8"
        />
        <path
          style="
            stroke-width: 0.0365751px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 14.859329,8.6215932 -0.0312,-1.85207"
          id="path14219-4"
        />
        <path
          style="
            stroke-width: 0.0364998px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 15.118959,8.7189432 -0.0312,-1.84394"
          id="path14219-71"
        />
        <path
          style="
            stroke-width: 0.0357361px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 15.289379,8.7918532 -0.0313,-1.76259"
          id="path14219-44"
        />
        <path
          style="
            stroke-width: 0.0361204px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 15.45162,8.8568132 -0.0313,-1.80326"
          id="path14219-20"
        />
        <path
          style="
            stroke-width: 0.0356586px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 15.68693,8.9216532 -0.0313,-1.75445"
          id="path14219-0"
        />
        <path
          style="
            stroke-width: 0.0346328px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 15.86548,8.9864232 -0.0314,-1.64871"
          id="path14219-14"
        />
        <path
          style="
            stroke-width: 0.0353468px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.04393,9.0919932 -0.0313,-1.72192"
          id="path14219-57"
        />
        <path
          style="
            stroke-width: 0.034065px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.23873,9.1323832 -0.0315,-1.59176"
          id="path14219-16"
        />
        <path
          style="
            stroke-width: 0.0335694px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.40102,9.2296832 -0.0316,-1.54296"
          id="path14219-78"
        />
        <path
          style="
            stroke-width: 0.0333182px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.54707,9.2783332 -0.0316,-1.51856"
          id="path14219-23"
        />
        <path
          style="
            stroke-width: 0.0338183px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.74176,9.4163232 -0.0315,-1.56737"
          id="path14219-46"
        />
        <path
          style="
            stroke-width: 0.033983px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 16.904021,9.4974732 -0.0315,-1.58363"
          id="path14219-37"
        />
        <path
          style="
            stroke-width: 0.0336526px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 17.090641,9.6596932 -0.0315,-1.55109"
          id="path14219-92"
        />
        <path
          style="
            stroke-width: 0.0324644px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 17.252971,9.7001232 -0.0317,-1.43723"
          id="path14219-48"
        />
        <path
          style="
            stroke-width: 0.0323775px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 17.390911,9.7731332 -0.0317,-1.4291"
          id="path14219-33"
        />
        <path
          style="
            stroke-width: 0.0318505px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 17.626221,9.8623232 -0.0318,-1.3803"
          id="path14219-84"
        />
        <path
          style="
            stroke-width: 0.0312226px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 17.837201,10.016403 -0.0318,-1.3233698"
          id="path14219-69"
        />
        <path
          style="
            stroke-width: 0.0295355px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.032021,10.048693 -0.032,-1.1769998"
          id="path14219-81"
        />
        <path
          style="
            stroke-width: 0.0288483px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.202431,10.113533 -0.0321,-1.1200798"
          id="path14219-60"
        />
        <path
          style="
            stroke-width: 0.0286484px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.380941,10.210873 -0.0321,-1.1038198"
          id="path14219-83"
        />
        <path
          style="
            stroke-width: 0.028039px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.535131,10.308183 -0.0322,-1.0550398"
          id="path14219-49"
        />
        <path
          style="
            stroke-width: 0.0277285px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.656841,10.437973 -0.0322,-1.0306498"
          id="path14219-06"
        />
        <path
          style="
            stroke-width: 0.0274139px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.819131,10.535303 -0.0323,-1.0062598"
          id="path14219-30"
        />
        <path
          style="
            stroke-width: 0.0264445px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 18.932771,10.583913 -0.0324,-0.9330998"
          id="path14219-42"
        />
        <path
          style="
            stroke-width: 0.0258878px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 19.078841,10.746143 -0.0325,-0.8924598"
          id="path14219-844"
        />
        <path
          style="
            stroke-width: 0.0258878px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 19.224881,10.851613 -0.0325,-0.8924598"
          id="path14219-96"
        />
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
const _openInfoRight = ref(false)
const _floor1 = ref(_locations.value[0].floors[0])
const _floor4 = ref(_locations.value[0].floors[1])
const _floor17 = ref(_locations.value[0].floors[2])

// function getInfoPosition(elementID: string) {
//   // const _floorPathEl = document.getElementById(elementID)
//   const _floorPathEl = document.getElementById(elementID)!
//   // const _floorPathEl: SVGPathElement = document.getElementById('pathFloorLabel1')?.getAttribute()
//   // const _floorPathSVG: SVGPathElement = _floorPathEl?.
//   const _floorPath = _floorPathEl?.getCTM()
//   // const _x = _floorPath?.left
//   // const _y = _floorPath?.top
//   // const _width = _floorPath?.width
//   console.log(_floorPath)
//   setTimeout(() => {
//     console.log(_floorPath)    
//   }, 1000);
// }
</script>

<style>
.buildingSVG {
  min-width: 350px;
  min-height: 450px;
  height: calc(95vh - 65px);
  fill: none;
  stroke: #000000;
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
.floorLabelPath {
  stroke-dasharray: 50;
  stroke-dashoffset: 45;
}
.floorLabelPathActive {
  /* stroke-dasharray: 0; */
  animation: pathActive 1s linear forwards;
}
/* .buildingInfo {
  position: absolute;
  top: 520px;
  left: 200px;
} */

@keyframes pathActive {
0% {
  stroke-dashoffset: 45;
}
100% {
  stroke-dashoffset: 0;
}
}
</style>
