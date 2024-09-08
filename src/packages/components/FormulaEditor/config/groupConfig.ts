import type {DataItem} from '../src/editor'

export interface IListItem {
    id: number | string,
    column: number,
    title: string,
    data: DataItem[]
}

// title tools
export const titleToolsList: DataItem[] = [
  {
    id: '1',
    latex: '\\pi',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.29ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 570 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path id="MJX-5-TEX-I-1D70B"\n' +
        '                        d="M132 -11Q98 -11 98 22V33L111 61Q186 219 220 334L228 358H196Q158 358 142 355T103 336Q92 329 81 318T62 297T53 285Q51 284 38 284Q19 284 19 294Q19 300 38 329T93 391T164 429Q171 431 389 431Q549 431 553 430Q573 423 573 402Q573 371 541 360Q535 358 472 358H408L405 341Q393 269 393 222Q393 170 402 129T421 65T431 37Q431 20 417 5T381 -10Q370 -10 363 -7T347 17T331 77Q330 86 330 121Q330 170 339 226T357 318T367 358H269L268 354Q268 351 249 275T206 114T175 17Q164 -11 132 -11Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mi">\n' +
        '                            <use data-c="1D70B" xlink:href="#MJX-5-TEX-I-1D70B"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '2',
    latex: '\\times',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-6-TEX-N-D7"\n' +
        '                        d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="D7" xlink:href="#MJX-6-TEX-N-D7"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '3',
    latex: '\\div',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-7-TEX-N-F7"\n' +
        '                        d="M318 466Q318 500 339 518T386 537Q418 537 438 517T458 466Q458 438 440 417T388 396Q355 396 337 417T318 466ZM56 237T56 250T70 270H706Q721 262 721 250T706 230H70Q56 237 56 250ZM318 34Q318 68 339 86T386 105Q418 105 438 85T458 34Q458 6 440 -15T388 -36Q355 -36 337 -15T318 34Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="F7" xlink:href="#MJX-7-TEX-N-F7"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '4',
    latex: '\\in',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path id="MJX-17-TEX-N-2208"\n' +
        '                        d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="20" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="2208" xlink:href="#MJX-17-TEX-N-2208"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '5',
    latex: '\\pm',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.66ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-19-TEX-N-B1"\n' +
        '                        d="M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="B1" xlink:href="#MJX-19-TEX-N-B1"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '6',
    latex: '\\le',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.46ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-23-TEX-N-2264"\n' +
        '                        d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="2264" xlink:href="#MJX-23-TEX-N-2264"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '7',
    latex: '\\ge',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.46ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-21-TEX-N-2265"\n' +
        '                        d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="2265" xlink:href="#MJX-21-TEX-N-2265"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  },
  {
    id: '8',
    latex: '\\ne',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.56ex" height="2.262ex" role="img" focusable="false"\n' +
        '                   viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"\n' +
        '                   style="vertical-align: -0.566ex;">\n' +
        '                <defs>\n' +
        '                  <path stroke-width="20" id="MJX-25-TEX-N-2260"\n' +
        '                        d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>\n' +
        '                </defs>\n' +
        '                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">\n' +
        '                  <g data-mml-node="math">\n' +
        '                    <g data-mml-node="mtable">\n' +
        '                      <g data-mml-node="mtr">\n' +
        '                        <g data-mml-node="mtd">\n' +
        '                          <g data-mml-node="mo">\n' +
        '                            <use data-c="2260" xlink:href="#MJX-25-TEX-N-2260"></use>\n' +
        '                          </g>\n' +
        '                        </g>\n' +
        '                      </g>\n' +
        '                    </g>\n' +
        '                  </g>\n' +
        '                </g>\n' +
        '              </svg>'
  }
]

export const commonLatexList:DataItem[] = [
  {
    id: '1',
    latex: '\\left(x-1\\right)\\left(x+3\\right) ',
    text: ''
  },{
    id: '2',
    latex: '\\frac{a}{b}\\pm \\frac{c}{d}= \\frac{ad \\pm bc}{bd} ',
    text: ''
  },{
    id: '16',
    latex: 'S=\\pi r^{2}',
    text: ''
  },{
    id: '3',
    latex: 'x ={-b \\pm \\sqrt{b^2-4ac}\\over 2a} ',
    text: ''
  },{
    id: '4',
    latex: '\\left\\{\\begin{matrix} \n' +
        '  x=a + r\\text{cos}\\theta \\\\  \n' +
        '  y=b + r\\text{sin}\\theta \n' +
        '\\end{matrix}\\right. ',
    text: ''
  },{
    id: '6',
    latex: '\\left | a-b \\right | \\geqslant \\left | a \\right | -\\left | b \\right | ',
    text: ''
  },{
    id: '7',
    latex: '\\int \\frac{1}{x}\\mathrm{d}x= \\ln \\left| x \\right| +C ',
    text: ''
  },{
    id: '9',
    latex: '\\sum_{i=1}^{n}{(X_i - \\overline{X})^2} ',
    text: ''
  },{
    id: '10',
    latex: '\\frac{1}{n^{2}-1}= \\frac{1}{2}\\left( \\frac{1}{n-1}-\\frac{1}{n+1}\\right) ',
    text: ''
  },{
    id: '12',
    latex: '\\underset{x\\rightarrow\\infty}{\\lim}\\left( 1+\\dfrac{1}{x}\\right)^{x}=\\text{e} ',
    text: ''
  },{
    id: '13',
    latex: 'a^{2}=b^{2}+c^{2}-2bc\\cos A ',
    text: ''
  },{
    id: '5',
    latex: '\\left.\\begin{matrix} \n' +
        '  a \\subset \\beta ,b \\subset \\beta ,a \\cap b=P \\\\  \n' +
        '  a \\parallel \\partial ,b \\parallel \\partial  \n' +
        '\\end{matrix}\\right\\}\\Rightarrow \\beta \\parallel \\alpha ',
    text: ''
  },{
    id: '8',
    latex: '\\sin \\alpha + \\sin \\beta =2 \\sin \\frac{\\alpha + \\beta}{2}\\cos \\frac{\\alpha - \\beta}{2} ',
    text: ''
  },{
    id: '11',
    latex: '\\overline{x}=\\dfrac{x_{1}p_{1}+x_{2}p_{2}+\\cdots \\cdots +x_{n}p_{n}}{n} ',
    text: ''
  },{
    id: '14',
    latex: '\\text{A}_{n}^{m}=n\\left( n-1\\right)\\cdots \\left( n-m+1\\right)=\\dfrac{n!}{\\left( n-m\\right)!} ',
    text: ''
  },{
    id: '15',
    latex: 's^{2}=\\dfrac{1}{n}[(x_{1}-\\overline{x})^{2}+(x_{2}-\\overline{x})^{2}+\\cdots+(x_{n}-\\overline{x})^{2}]',
    text: ''
  }
]
