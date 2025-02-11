// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you see {{name}}, for example, it refers to the name
// field of this object.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

'use strict';

// These are my frequent collaborators, so let's use some variables:
const maggio = "Dominic Maggio";
const carlone = "Luca Carlone";
const mario = "Courtney Mario";
const chang = "Yun Chang";
const hughes = "Nathan Hughes";
const l1 = "Matthew Trang";
const l2 = "Dan Griffith";
const l3 = "Carlyn Dougherty";
const l4 = "Eric Cristofalo";
const schmid = "Lukas Schmid";
const shi = "Jingnan Shi";
const abate = "Marcus Abate";
const streetman = "Brett Streetman";
const steiner = "Ted Steiner";

// authorList generates the HTML for the author list from a JS array
function authorList(authors) {
  var list = [];
  authors.forEach((name, i) => {
    if (name == maggio) {
      name = '<span class="self-author">' + name + "</span>";
    }
    if (i == authors.length - 1 & authors.length != 1) {
      list.push("and " + name);
    } else {
      list.push(name);
    }
  });
  return list.join(", ");
}

// sometimes there are paper links, project pages, talk videos, and news
function extraInfo(options) {
  var line = "";
  var list = [];
  var shoutout = "shoutout" in options ? options.shoutout : "";
  var talk = "talk" in options ? options.talk : "";
  var demo = "demo" in options ? options.demo : "";
  var code = "code" in options ? options.code : "";
  var paper = "paper" in options ? options.paper : "";
  var id = "id" in options ? options.id : "";
  var poster = "poster" in options ? options.poster : "";
  var postersize = "postersize" in options ? options.postersize : [800, 440];
  var video = "video" in options ? options.video : "";
  var videosize = "videosize" in options ? options.videosize : [800, 440];
  var page = "page" in options ? options.page : "";
  var media = "media" in options ? options.media : [];
  var bibtex = "bibtex" in options ? options.bibtex : "";

  if (shoutout !== "") {
    line = `<p style="color: grey"><i>${shoutout}</i></p>`
  }
  if (paper !== "") {
    list.push(`<a href="${paper}" target="_blank">Paper</a>`)
  }
  if (page !== "") {
    list.push(`<a href="${page}" target="_blank">Project Page</a>`)
  }
  if (code !== "") {
    list.push(`<a href="${code}" target="_blank">Github</a>`)
  }
  if (bibtex !== "") {
    list.push(`<a class="buttona" onclick="${bibtex}();">Bibtex</a>`)
    // list.push(`<a class="buttona" onclick="copyToClipboard(${bibtex});">Bibtex</a>`)
  }
  if (talk !== "") {
    list.push(`<a href="${talk}" target="_blank">Video</a>`)
  }
  if (demo !== "") {
    list.push(`<a href="${demo}" target="_blank">Video Demo</a>`)
  }
  for (const [medianame, mediaurl] of Object.entries(media)) {
    list.push(`<a href="${mediaurl}" target="_blank">${medianame}</a>`)
  }
  if (video !== "" && id !== "") {
    list.push(`<span id="showvid${id}" class="posterbutton"  onclick="document.getElementById('vid${id}').style.display='block'; document.getElementById('hidevid${id}').style.display='inline'; document.getElementById('showvid${id}').style.display='none'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)">Video (click to show)</span>
    <span id="hidevid${id}" class="posterbutton" style="display:none" onclick="document.getElementById('vid${id}').style.display='none'; document.getElementById('hidevid${id}').style.display='none'; document.getElementById('showvid${id}').style.display='inline'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)"">Video (click to hide)</span>
    <iframe class="posterlink" frameborder="0" id="vid${id}" src="${video}" style="display:none;" width="${videosize[0]}px"
    height="${videosize[1]}px" allow="autoplay"></iframe>`)
  }
  if (poster !== "" && id !== "") {
    list.push(`<span id="show${id}" class="posterbutton"  onclick="document.getElementById('${id}').style.display='block'; document.getElementById('hide${id}').style.display='inline'; document.getElementById('show${id}').style.display='none'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)">Poster (click to show)</span>
    <span id="hide${id}" class="posterbutton" style="display:none" onclick="document.getElementById('${id}').style.display='none'; document.getElementById('hide${id}').style.display='none'; document.getElementById('show${id}').style.display='inline'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)"">Poster (click to hide)</span>
    <iframe class="posterlink" id="${id}" src="${poster}" style="display:none;" width="${postersize[0]}px"
    height="${postersize[1]}px" allow="autoplay"></iframe>`)
  }
  return line + list.join("&nbsp;&nbsp;<i>/</i>&nbsp;&nbsp;");
}

module.exports = {
  name: "Dominic Maggio",
  email: "drmaggio {at} mit {dot} edu",
  linkedin: "https://www.linkedin.com/in/dominic-maggio-050034158/",
  publications: [
    {
      title: "Bayesian Fields: Task-driven open-set semantic gaussian splatting",
      authors: authorList([ maggio, carlone]),
      conference: "arxiv 2025 availible soon",
      visual: "https://github.com/Dominic101/dominic-maggio-website/blob/main/img/bayesian.jpg?raw=true",
      // extra: extraInfo({
      //   paper: "https://arxiv.org/abs/2404.13696",
      //   code: "https://github.com/MIT-SPARK/Clio",
      //   talk: "https://www.youtube.com/watch?v=m-HJO10qhSQ",
      //   bibtex: "copyDiffusionCCSPToClipboard",
      // })
    },
    {
      title: "Clio: Real-time Task-Driven Open-Set 3D Scene Graphs",
      authors: authorList([ maggio, chang, hughes, l1, l2, l3, l4, schmid, carlone]),
      conference: "RAL 2024",
      visual: "https://github.com/Dominic101/dominic-maggio-website/blob/main/img/clio.jpg?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2404.13696",
        code: "https://github.com/MIT-SPARK/Clio",
        talk: "https://www.youtube.com/watch?v=m-HJO10qhSQ",
        // bibtex: "copyDiffusionCCSPToClipboard",
        media: {
          "MIT News": "https://news.mit.edu/2024/helping-robots-focus-on-objects-that-matter-0930",
        },
        shoutout: "&#128293; Featured Front Page of MIT News",
      })
    },
    {
      title: "VERF: Runtime monitoring of pose estimation with neural radiance fields",
      authors: authorList([ maggio, mario, carlone]),
      conference: "RAL 2023",
      visual: "https://github.com/Dominic101/dominic-maggio-website/blob/main/img/verf.jpg?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2308.05939",
        // talk: "https://www.youtube.com/watch?v=m-HJO10qhSQ",
        // bibtex: "copyDiffusionCCSPToClipboard",
      })
    },
    {
      title: "Loc-NeRF: Monte carlo localization using neural radiance fields.",
      authors: authorList([ maggio, abate, shi, mario, carlone]),
      conference: "ICRA 2023",
      vvisual: "https://github.com/Dominic101/dominic-maggio-website/blob/main/img/locnerf.jpg?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2209.09050",
        code: "https://github.com/MIT-SPARK/Loc-NeRF",
        talk: "https://www.youtube.com/watch?v=yIgl3kbpbXY",
        // bibtex: "copyDiffusionCCSPToClipboard",
      })
    },
    {
      title: "Vision-based terrain relative navigation on high altitude balloon and sub-orbital rocket.",
      authors: authorList([ maggio, mario, streetman, steiner, carlone]),
      conference: "SciTech 2023",
      visual: "https://github.com/Dominic101/dominic-maggio-website/blob/main/img/rocket.jpg?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2302.08011",
        // bibtex: "copyDiffusionCCSPToClipboard",
        media: {
          "Aerospace America": "https://aerospaceamerica.aiaa.org/departments/sticking-the-landing/",
          "Interesting Engineering": "https://interestingengineering.com/innovation/draper-tested-its-moon-navigation-system-aboard-a-suborbital-blue-origin-rocket",
          "Draper News": "https://www.draper.com/media-center/news-releases/detail/23484/drapers-dmen-aces-flight-tests",
        },
        shoutout: "&#128293; Featured in Articles in Aerospace America, Interesting Engineering and Draper News",
      })
    },
  ],
  thesis:
  [
    {
      title: "Visual Terrain Relative Navigation: Pose Estimation, Neural Fields, and Verification",
      authors: authorList([maggio]),
      conference: "MIT Master's Thesis",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/corl23packing.gif?raw=true",
      extra: extraInfo({
        paper: "https://dspace.mit.edu/handle/1721.1/151568",
        // bibtex: "copyDiffusionCCSPToClipboard",
      })
    },
  ],
};
