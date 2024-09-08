export interface DataItem {
  text: string,
  latex: string,
  id: number | string
}

export interface IListItem {
    id: number | string,
    column: number,
    title: string,
    data: DataItem[]
}

// 常用公式
export const useLatexList: DataItem[] = [
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

// 基础运算符
export const baseLatex: DataItem[] = [
  {
    id: '1',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.505ex" viewBox="0 -583 778 665" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-16-TEX-N-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-16-TEX-N-2B"></use></g></g></g></svg>',
    latex: '+'
  },
  {
    id: '2',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.505ex" viewBox="0 -583 778 665" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-17-TEX-N-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-17-TEX-N-2212"></use></g></g></g></svg>',
    latex: '-'
  },
  {
    id: '3',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.09ex" viewBox="0 -491 778 482" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-18-TEX-N-D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-18-TEX-N-D7"></use></g></g></g></svg>',
    latex: '\\times'
  },
  {
    id: '4',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.296ex" viewBox="0 -537 778 573" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-19-TEX-N-F7" d="M318 466Q318 500 339 518T386 537Q418 537 438 517T458 466Q458 438 440 417T388 396Q355 396 337 417T318 466ZM56 237T56 250T70 270H706Q721 262 721 250T706 230H70Q56 237 56 250ZM318 34Q318 68 339 86T386 105Q418 105 438 85T458 34Q458 6 440 -15T388 -36Q355 -36 337 -15T318 34Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mo"><use xlink:href="#MJX-19-TEX-N-F7"></use></g></g></g></g></svg>',
    latex: '\\div'
  },
  {
    id: '5',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.507ex" viewBox="0 -666 778 666" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-21-TEX-N-B1" d="M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-21-TEX-N-B1"></use></g></g></g></svg>',
    latex: '\\pm'
  },
  {
    id: '6',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="1.507ex" viewBox="0 -500 778 666" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-22-TEX-N-2213" d="M56 467T56 480T70 500H707Q722 492 722 480T707 460H409V187H707Q722 179 722 167Q722 154 707 147H409V0V-93Q409 -144 406 -155T389 -166Q376 -166 372 -155T368 -105Q368 -96 368 -62T369 -2V147H70Q56 154 56 167T70 187H369V460H70Q56 467 56 480Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-22-TEX-N-2213"></use></g></g></g></svg>',
    latex: '\\mp'
  },
  {
    id: '7',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-2-TEX-N-2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2217" xlink:href="#MJX-2-TEX-N-2217"></use></g></g></g></g></g></g></svg>',
    latex: '*'
  },
  {
    id: '8',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="1.154ex" viewBox="0 -505 500 510" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-23-TEX-N-25C3" d="M473 10Q466 -5 454 -5Q451 -5 445 -3Q444 -3 343 56T140 173T35 234Q26 239 26 250T35 266Q40 269 240 384T445 503Q451 505 453 505Q466 505 473 490V10ZM433 50T433 250T432 450T259 351T87 250T258 150T432 50Q433 50 433 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-23-TEX-N-25C3"></use></g></g></g></svg>',
    latex: '\\triangleleft'
  },
  {
    id: '9',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="1.154ex" viewBox="0 -505 500 510" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style=""><defs><path id="MJX-24-TEX-N-25B9" d="M26 489Q33 505 43 505Q51 505 260 385Q464 266 471 259Q473 257 473 250Q473 242 469 239Q459 231 260 115Q51 -5 43 -5Q39 -5 35 -1T28 7L26 11V489ZM412 250L67 450Q66 450 66 250T67 50Q69 51 240 150T412 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><use xlink:href="#MJX-24-TEX-N-25B9"></use></g></g></g></svg>',
    latex: '\\triangleright'
  },
  {
    id: '10',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="0.629ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 278 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-2-TEX-N-22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22C5" xlink:href="#MJX-2-TEX-N-22C5"></use></g></g></g></g></g></g></svg>',
    latex: '\\cdot'
  },
  {
    id: '11',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-3-TEX-N-2216" d="M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2216" xlink:href="#MJX-3-TEX-N-2216"></use></g></g></g></g></g></g></svg>',
    latex: '\\setminus'
  },
  {
    id: '12',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-22C6" d="M210 282Q210 284 225 381T241 480Q241 484 245 484Q249 486 251 486Q258 486 260 477T272 406Q275 390 276 380Q290 286 290 282L388 299Q484 314 487 314H488Q497 314 497 302Q497 297 434 266Q416 257 404 251L315 206L361 118Q372 98 383 75T401 40L407 28Q407 16 395 16Q394 16 392 16L390 17L250 159L110 17L108 16Q106 16 105 16Q93 16 93 28L99 40Q105 52 116 75T139 118L185 206L96 251Q6 296 4 300Q3 301 3 302Q3 314 12 314H13Q16 314 112 299L210 282Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22C6" xlink:href="#MJX-4-TEX-N-22C6"></use></g></g></g></g></g></g></svg>',
    latex: '\\ast'
  },
  {
    id: '13',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-3-TEX-N-222A" d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="222A" xlink:href="#MJX-3-TEX-N-222A"></use></g></g></g></g></g></g></svg>',
    latex: '\\cup'
  },
  {
    id: '14',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-2229" d="M88 -21T75 -21T55 -7V200Q55 231 55 280Q56 414 60 428Q61 430 61 431Q77 500 152 549T332 598Q443 598 522 544T610 405Q611 399 611 194V-7Q604 -22 591 -22Q582 -22 572 -9L570 405Q563 433 556 449T529 485Q498 519 445 538T334 558Q251 558 179 518T96 401Q95 396 95 193V-7Q88 -21 75 -21Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2229" xlink:href="#MJX-4-TEX-N-2229"></use></g></g></g></g></g></g></svg>',
    latex: '\\cap'
  },
  {
    id: '15',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2294" d="M77 0Q65 4 61 16V301L62 585Q72 598 81 598Q94 598 101 583V40H565V583Q573 598 585 598Q598 598 605 583V15Q602 10 592 1L335 0H77Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2294" xlink:href="#MJX-6-TEX-N-2294"></use></g></g></g></g></g></g></svg>',
    latex: '\\sqcup'
  },
  {
    id: '16',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-2293" d="M83 0Q79 0 76 1T71 3T67 6T65 9T63 13T61 16V301L62 585Q70 595 76 598H592Q602 590 605 583V15Q598 2 587 0Q583 0 580 1T575 3T571 6T569 9T567 13T565 16V558H101V15Q94 2 83 0Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2293" xlink:href="#MJX-8-TEX-N-2293"></use></g></g></g></g></g></g></svg>',
    latex: '\\sqcap'
  },
  {
    id: '17',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-3-TEX-N-2228" d="M55 580Q56 587 61 592T75 598Q86 598 96 580L333 48L570 580Q579 596 586 597Q588 598 591 598Q609 598 611 580Q611 574 546 426T415 132T348 -15Q343 -22 333 -22T318 -15Q317 -14 252 131T121 425T55 580Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2228" xlink:href="#MJX-3-TEX-N-2228"></use></g></g></g></g></g></g></svg>',
    latex: '\\vee'
  },
  {
    id: '18',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-2227" d="M318 591Q325 598 333 598Q344 598 348 591Q349 590 414 445T545 151T611 -4Q609 -22 591 -22Q588 -22 586 -21T581 -20T577 -17T575 -13T572 -9T570 -4L333 528L96 -4Q87 -20 80 -21Q78 -22 75 -22Q57 -22 55 -4Q55 2 120 150T251 444T318 591Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2227" xlink:href="#MJX-4-TEX-N-2227"></use></g></g></g></g></g></g></svg>',
    latex: '\\wedge'
  },
  {
    id: '19',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-3-TEX-N-2218" d="M55 251Q55 328 112 386T249 444T386 388T444 249Q444 171 388 113T250 55Q170 55 113 112T55 251ZM245 403Q188 403 142 361T96 250Q96 183 141 140T250 96Q284 96 313 109T354 135T375 160Q403 197 403 250Q403 313 360 358T245 403Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2218" xlink:href="#MJX-3-TEX-N-2218"></use></g></g></g></g></g></g></svg>',
    latex: '\\circ'
  },
  {
    id: '20',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2219" d="M55 251Q55 328 112 386T249 444T386 388T444 249Q444 171 388 113T250 55Q170 55 113 112T55 251Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2219" xlink:href="#MJX-6-TEX-N-2219"></use></g></g></g></g></g></g></svg>',
    latex: '\\bullet'
  },
  {
    id: '21',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-3-TEX-N-2295" d="M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM364 542Q308 539 251 509T148 418T96 278V270H369V542H364ZM681 278Q675 338 650 386T592 462T522 509T458 535T412 542H409V270H681V278ZM96 222Q104 150 139 95T219 12T302 -29T366 -42H369V230H96V222ZM681 222V230H409V-42H412Q429 -42 456 -36T521 -10T590 37T649 113T681 222Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2295" xlink:href="#MJX-3-TEX-N-2295"></use></g></g></g></g></g></g></svg>',
    latex: '\\oplus'
  },
  {
    id: '22',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-2296" d="M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM681 278Q669 385 591 463T381 542Q283 542 196 471T96 278V270H681V278ZM275 -42T388 -42T585 32T681 222V230H96V222Q108 107 191 33Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2296" xlink:href="#MJX-4-TEX-N-2296"></use></g></g></g></g></g></g></svg>',
    latex: '\\ominus'
  },
  {
    id: '23',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-2299" d="M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM682 250Q682 322 649 387T546 497T381 542Q272 542 184 459T95 250Q95 132 178 45T389 -42Q515 -42 598 45T682 250ZM311 250Q311 285 332 304T375 328Q376 328 382 328T392 329Q424 326 445 305T466 250Q466 217 445 195T389 172Q354 172 333 195T311 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2299" xlink:href="#MJX-5-TEX-N-2299"></use></g></g></g></g></g></g></svg>',
    latex: '\\odot'
  },
  {
    id: '24',
    latex: '\\oslash',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2298" d="M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM582 471Q581 472 571 480T556 491T539 502T517 514T491 525T460 534T424 539T381 542Q272 542 184 460T95 251Q95 198 113 150T149 80L167 58L582 471ZM388 -42Q513 -42 597 44T682 250Q682 363 610 442L196 29Q209 16 229 2T295 -27T388 -42Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2298" xlink:href="#MJX-6-TEX-N-2298"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '25',
    latex: '\\otimes',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2297" d="M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM582 471Q531 510 496 523Q446 542 381 542Q324 542 272 519T196 471L389 278L485 375L582 471ZM167 442Q95 362 95 250Q95 137 167 58L359 250L167 442ZM610 58Q682 138 682 250Q682 363 610 442L418 250L610 58ZM196 29Q209 16 230 2T295 -27T388 -42Q409 -42 429 -40T465 -33T496 -23T522 -11T544 1T561 13T574 22T582 29L388 222L196 29Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2297" xlink:href="#MJX-6-TEX-N-2297"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '26',
    latex: '\\bigcirc',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-25EF" d="M56 250Q56 353 95 442T196 589T335 681T491 715Q573 715 635 693Q694 673 747 635T846 543T917 412T944 250Q944 58 815 -78T500 -215Q457 -215 429 -210Q274 -183 165 -56T56 250ZM500 -176Q664 -176 784 -54T904 250Q904 418 799 536T543 674Q534 675 493 675Q425 675 357 647T229 567T133 432T96 250Q96 160 129 80T217 -56T346 -144T500 -176Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="25EF" xlink:href="#MJX-7-TEX-N-25EF"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '27',
    latex: '\\diamond',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-22C4" d="M242 486Q245 488 250 488Q256 488 258 486Q262 484 373 373T486 258T488 250T486 242T373 127T258 14Q256 12 250 12Q245 12 242 14Q237 16 127 126T14 242Q12 245 12 250T14 258Q16 263 126 373T242 486ZM439 250L250 439L61 250L250 61L439 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22C4" xlink:href="#MJX-8-TEX-N-22C4"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '28',
    latex: '\\uplus',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-228E" d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598ZM313 406Q313 417 313 435T312 459Q312 483 316 493T333 503T349 494T353 461V406V325H515Q516 325 519 323T527 316T531 305T527 294T520 287T515 285H353V204V152Q353 127 350 117T333 107T316 117T312 152Q312 158 312 175T313 204V285H151Q150 285 147 287T139 294T135 305T139 316T146 323T151 325H313V406Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="228E" xlink:href="#MJX-9-TEX-N-228E"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '29',
    latex: '\\bigtriangleup',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.011ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 889 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-25B3" d="M75 0L72 2Q69 3 67 5T62 11T59 20Q59 24 62 30Q65 37 245 370T428 707Q428 708 430 710T436 714T444 716Q451 716 455 712Q459 710 644 368L828 27V20Q828 7 814 0H75ZM610 347L444 653Q443 653 278 347T113 40H775Q775 42 610 347Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="25B3" xlink:href="#MJX-10-TEX-N-25B3"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '30',
    latex: '\\bigtriangledown',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.011ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 889 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-25BD" d="M59 480Q59 485 61 489T66 495T72 498L75 500H814Q828 493 828 480V474L644 132Q458 -210 455 -212Q451 -215 444 -215T433 -212Q429 -210 342 -49T164 282T64 466Q59 478 59 480ZM775 460H113Q113 459 278 153T444 -153T610 153T775 460Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="25BD" xlink:href="#MJX-11-TEX-N-25BD"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '31',
    latex: '\\lhd',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-12-TEX-N-22B2" d="M694 -26Q686 -40 676 -41H670L382 95Q92 232 90 234Q83 239 83 249Q83 262 96 267Q101 270 379 401T665 537Q671 539 674 539Q686 539 694 524V-26ZM654 11T654 249T653 487T402 369T151 249L275 190Q399 131 524 72T652 11Q654 11 654 249Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22B2" xlink:href="#MJX-12-TEX-N-22B2"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '32',
    latex: '\\rhd',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-22B3" d="M83 523Q83 524 85 527T92 535T103 539Q107 539 389 406T680 268Q694 260 694 249Q694 239 687 234Q685 232 395 95L107 -41H101Q90 -40 83 -26V523ZM376 368Q323 393 254 425T155 472L125 487Q123 487 123 249T125 11Q127 12 252 71T502 190L626 249L376 368Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22B3" xlink:href="#MJX-13-TEX-N-22B3"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '33',
    latex: '\\unlhd',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-14-TEX-N-22B4" d="M694 71Q686 58 676 56H670L382 192Q92 329 90 331Q83 336 83 346Q83 359 96 364Q101 367 379 498T665 634Q671 636 674 636Q686 636 694 621V71ZM654 108T654 346T653 584T402 466T151 346L275 287Q399 228 524 169T652 108Q654 108 654 346ZM83 -120Q83 -116 84 -113T86 -108T89 -104T92 -102T96 -100T99 -98H678Q679 -98 681 -99T684 -101T688 -104T691 -108T693 -113T694 -120Q692 -130 679 -138H98Q84 -130 83 -120Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22B4" xlink:href="#MJX-14-TEX-N-22B4"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '34',
    latex: '\\unrhd',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-22B5" d="M83 620Q83 621 85 624T92 632T103 636Q107 636 389 503T680 365Q694 357 694 346Q694 336 687 331Q685 329 395 192L107 56H101Q90 58 83 71V620ZM376 465Q323 490 254 522T155 570L125 584Q123 584 123 346T125 108Q127 109 252 168T502 287L626 346L376 465ZM83 -120Q83 -116 84 -113T86 -108T89 -104T92 -102T96 -100T99 -98H678Q679 -98 681 -99T684 -101T688 -104T691 -108T693 -113T694 -120Q692 -130 679 -138H98Q84 -130 83 -120Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22B5" xlink:href="#MJX-15-TEX-N-22B5"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '35',
    latex: '\\amalg',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.697ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 750 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-16-TEX-N-2A3F" d="M28 660Q28 676 31 679T46 683H50Q87 681 182 681Q217 681 247 681T294 682T315 682Q321 682 323 682T328 679T331 673T332 660Q332 643 328 640T304 637Q239 637 231 626Q229 620 229 334V46H520V334Q520 620 518 626Q510 637 445 637Q426 637 422 640T417 660Q417 675 420 678T432 682H435Q437 682 467 682T569 681T671 681T703 682Q714 682 717 679T721 660Q721 643 717 640T693 637Q628 637 620 626Q619 623 619 342Q619 60 620 57Q628 46 693 46Q714 46 717 43T721 23Q721 5 715 1Q713 0 374 0Q36 0 34 1Q28 5 28 23Q28 40 31 43T56 46Q121 46 129 57Q131 63 131 342Q131 620 129 626Q121 637 56 637Q35 637 32 640T28 660Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2A3F" xlink:href="#MJX-16-TEX-N-2A3F"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '36',
    latex: '\\wr',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="0.629ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 278 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-17-TEX-N-2240" d="M55 569Q55 583 83 583Q122 583 151 565T194 519T215 464T222 411Q222 360 194 304T139 193T111 89Q111 38 134 -7T195 -55Q222 -57 222 -69Q222 -83 189 -83Q130 -83 93 -33T55 90Q55 130 72 174T110 252T148 328T166 411Q166 462 144 507T83 555Q55 556 55 569Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2240" xlink:href="#MJX-17-TEX-N-2240"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '37',
    latex: '\\dagger',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 444 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-18-TEX-N-2020" d="M182 675Q195 705 222 705Q234 705 243 700T253 691T263 675L262 655Q262 620 252 549T240 454V449Q250 451 288 461T346 472T377 461T389 431Q389 417 379 404T346 390Q327 390 288 401T243 412H240V405Q245 367 250 339T258 301T261 274T263 225Q263 124 255 -41T239 -213Q236 -216 222 -216H217Q206 -216 204 -212T200 -186Q199 -175 199 -168Q181 38 181 225Q181 265 182 280T191 327T204 405V412H201Q196 412 157 401T98 390Q76 390 66 403T55 431T65 458T98 472Q116 472 155 462T205 449Q204 452 204 460T201 490T193 547Q182 619 182 655V675Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2020" xlink:href="#MJX-18-TEX-N-2020"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '38',
    latex: '\\ddagger',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.005ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 444 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-19-TEX-N-2021" d="M181 658Q181 705 222 705T263 658Q263 633 252 572T240 497Q240 496 241 496Q243 496 285 507T345 519Q365 519 376 508T388 478Q388 466 384 458T375 447T361 438H344Q318 438 282 448T241 459Q240 458 240 456Q240 449 251 384T263 297Q263 278 255 267T238 253T222 250T206 252T190 266T181 297Q181 323 192 383T204 458Q204 459 203 459Q198 459 162 449T101 438H84Q74 443 70 446T61 457T56 478Q56 497 67 508T99 519Q117 519 159 508T203 496Q204 496 204 499Q204 507 193 572T181 658ZM181 202Q181 249 222 249T263 202Q263 185 259 161T249 103T240 48V41H243Q248 41 287 52T346 63T377 52T389 22Q389 8 379 -5T346 -19Q327 -19 288 -8T243 3H240V-4Q243 -24 249 -58T259 -117T263 -158Q263 -177 255 -188T238 -202T222 -205T206 -203T190 -189T181 -158Q181 -141 185 -117T195 -59T204 -4V3H201Q196 3 157 -8T98 -19Q76 -19 66 -6T55 22T65 49T98 63Q117 63 156 52T201 41H204V48Q201 68 195 102T185 161T181 202Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2021" xlink:href="#MJX-19-TEX-N-2021"></use></g></g></g></g></g></g></svg>'
  },
  {
    id: '39',
    latex: '⟨',
    text: '⟨'
  },
  {
    id: '40',
    latex: '⟩',
    text: '⟩'
  }
]

// 关系符
const relativeLatex = [
  {
    id: '1',
    latex: '<',
    text: '<'
  }, {
    id: '2',
    latex: '>',
    text: '>'
  }, {
    id: '3',
    latex: '=',
    text: '='
  }, {
    id: '4',
    latex: '\\le',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2264" xlink:href="#MJX-5-TEX-N-2264"></use></g></g></g></g></g></g></svg>'
  },{
    id: '5',
    latex: '\\ge',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2265" d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2265" xlink:href="#MJX-6-TEX-N-2265"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '6',
    latex: '\\equiv',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-2261" d="M56 444Q56 457 70 464H707Q722 456 722 444Q722 430 706 424H72Q56 429 56 444ZM56 237T56 250T70 270H707Q722 262 722 250T707 230H70Q56 237 56 250ZM56 56Q56 71 72 76H706Q722 70 722 56Q722 44 707 36H70Q56 43 56 56Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2261" xlink:href="#MJX-7-TEX-N-2261"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '7',
    latex: '\\ll',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-226A" d="M639 -48Q639 -54 634 -60T619 -67H618Q612 -67 536 -26Q430 33 329 88Q61 235 59 239Q56 243 56 250T59 261Q62 266 336 415T615 567L619 568Q622 567 625 567Q639 562 639 548Q639 540 633 534Q632 532 374 391L117 250L374 109Q632 -32 633 -34Q639 -40 639 -48ZM944 -48Q944 -54 939 -60T924 -67H923Q917 -67 841 -26Q735 33 634 88Q366 235 364 239Q361 243 361 250T364 261Q367 266 641 415T920 567L924 568Q927 567 930 567Q944 562 944 548Q944 540 938 534Q937 532 679 391L422 250L679 109Q937 -32 938 -34Q944 -40 944 -48Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="226A" xlink:href="#MJX-5-TEX-N-226A"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '8',
    latex: '\\gg',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-226B" d="M55 539T55 547T60 561T74 567Q81 567 207 498Q297 449 365 412Q633 265 636 261Q639 255 639 250Q639 241 626 232Q614 224 365 88Q83 -65 79 -66Q76 -67 73 -67Q65 -67 60 -61T55 -47Q55 -39 61 -33Q62 -33 95 -15T193 39T320 109L321 110H322L323 111H324L325 112L326 113H327L329 114H330L331 115H332L333 116L334 117H335L336 118H337L338 119H339L340 120L341 121H342L343 122H344L345 123H346L347 124L348 125H349L351 126H352L353 127H354L355 128L356 129H357L358 130H359L360 131H361L362 132L363 133H364L365 134H366L367 135H368L369 136H370L371 137L372 138H373L374 139H375L376 140L378 141L576 251Q63 530 62 533Q55 539 55 547ZM360 539T360 547T365 561T379 567Q386 567 512 498Q602 449 670 412Q938 265 941 261Q944 255 944 250Q944 241 931 232Q919 224 670 88Q388 -65 384 -66Q381 -67 378 -67Q370 -67 365 -61T360 -47Q360 -39 366 -33Q367 -33 400 -15T498 39T625 109L626 110H627L628 111H629L630 112L631 113H632L634 114H635L636 115H637L638 116L639 117H640L641 118H642L643 119H644L645 120L646 121H647L648 122H649L650 123H651L652 124L653 125H654L656 126H657L658 127H659L660 128L661 129H662L663 130H664L665 131H666L667 132L668 133H669L670 134H671L672 135H673L674 136H675L676 137L677 138H678L679 139H680L681 140L683 141L881 251Q368 530 367 533Q360 539 360 547Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="226B" xlink:href="#MJX-6-TEX-N-226B"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '9',
    latex: '\\doteq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-2250" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153ZM329 610Q329 634 346 652T389 670Q413 670 431 654T450 611Q450 586 433 568T390 550T347 567T329 610Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2250" xlink:href="#MJX-7-TEX-N-2250"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '10',
    latex: '\\prec',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-227A" d="M84 249Q84 262 91 266T117 270Q120 270 126 270T137 269Q388 273 512 333T653 512Q657 539 676 539Q685 538 689 532T694 520V515Q689 469 672 431T626 366T569 320T500 286T435 265T373 249Q379 248 404 242T440 233T477 221T533 199Q681 124 694 -17Q694 -41 674 -41Q658 -41 653 -17Q646 41 613 84T533 154T418 197T284 220T137 229H114Q104 229 98 230T88 235T84 249Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="227A" xlink:href="#MJX-8-TEX-N-227A"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '11',
    latex: '\\succ',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-227B" d="M84 517Q84 539 102 539Q115 539 119 529T125 503T137 459T171 404Q277 275 640 269H661Q694 269 694 249T661 229H640Q526 227 439 214T283 173T173 98T124 -17Q118 -41 103 -41Q83 -41 83 -17Q88 29 105 67T151 132T208 178T277 212T342 233T404 249Q401 250 380 254T345 263T302 276T245 299Q125 358 92 468Q84 502 84 517Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="227B" xlink:href="#MJX-9-TEX-N-227B"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '12',
    latex: '\\sim',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-223C" d="M55 166Q55 241 101 304T222 367Q260 367 296 349T362 304T421 252T484 208T554 189Q616 189 655 236T694 338Q694 350 698 358T708 367Q722 367 722 334Q722 260 677 197T562 134H554Q517 134 481 152T414 196T355 248T292 293T223 311Q179 311 145 286Q109 257 96 218T80 156T69 133Q55 133 55 166Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="223C" xlink:href="#MJX-10-TEX-N-223C"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '13',
    latex: '\\preceq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-2AAF" d="M84 346Q84 359 91 363T117 367Q120 367 126 367T137 366Q388 370 512 430T653 609Q657 636 676 636Q685 635 689 629T694 618V612Q689 566 672 528T626 463T569 417T500 383T435 362T373 346Q379 345 404 339T440 330T477 318T533 296Q592 266 630 223T681 145T694 78Q694 57 674 57Q662 57 657 67T652 92T640 135T606 191Q500 320 137 326H114Q104 326 98 327T88 332T84 346ZM84 -131T84 -118T98 -98H679Q694 -106 694 -118T679 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2AAF" xlink:href="#MJX-4-TEX-N-2AAF"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '14',
    latex: '\\succeq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-2AB0" d="M84 614Q84 636 102 636Q115 636 119 626T125 600T137 556T171 501Q277 372 640 366H661Q694 366 694 346T661 326H640Q578 325 526 321T415 307T309 280T222 237T156 172T124 83Q122 66 118 62T103 57Q100 57 98 57T95 58T93 59T90 62T85 67Q83 71 83 80Q88 126 105 164T151 229T208 275T277 309T342 330T404 346Q401 347 380 351T345 360T302 373T245 396Q125 455 92 565Q84 599 84 614ZM84 -131T84 -118T98 -98H679Q694 -106 694 -118T679 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2AB0" xlink:href="#MJX-5-TEX-N-2AB0"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '15',
    latex: '\\simeq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2243" d="M55 283Q55 356 103 409T217 463Q262 463 297 447T395 382Q431 355 446 344T493 320T554 307H558Q613 307 652 344T694 433Q694 464 708 464T722 432Q722 356 673 304T564 251H554Q510 251 465 275T387 329T310 382T223 407H219Q164 407 122 367Q91 333 85 295T76 253T69 250Q55 250 55 283ZM56 56Q56 71 72 76H706Q722 70 722 56Q722 44 707 36H70Q56 43 56 56Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2243" xlink:href="#MJX-6-TEX-N-2243"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '16',
    latex: '\\approx',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-2248" d="M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2248" xlink:href="#MJX-7-TEX-N-2248"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '17',
    latex: '\\subset',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-2282" d="M84 250Q84 372 166 450T360 539Q361 539 370 539T395 539T430 540T475 540T524 540H679Q694 532 694 520Q694 511 681 501L522 500H470H441Q366 500 338 496T266 472Q244 461 224 446T179 404T139 337T124 250V245Q124 157 185 89Q244 25 328 7Q348 2 366 2T522 0H681Q694 -10 694 -20Q694 -32 679 -40H526Q510 -40 480 -40T434 -41Q350 -41 289 -25T172 45Q84 127 84 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2282" xlink:href="#MJX-8-TEX-N-2282"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '18',
    latex: '\\supset',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-2283" d="M83 520Q83 532 98 540H251Q267 540 297 540T343 541Q427 541 488 525T605 455Q693 374 693 250Q693 165 650 99T545 0T415 -39Q407 -40 251 -40H98Q83 -32 83 -20Q83 -10 96 0H255H308H337Q412 0 439 4T512 28Q533 39 553 54T599 96T639 163T654 250Q654 341 592 411Q557 449 512 472Q468 491 439 495T335 500H306H255L96 501Q83 511 83 520Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2283" xlink:href="#MJX-9-TEX-N-2283"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '19',
    latex: '\\subseteq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-2286" d="M84 346Q84 468 166 546T360 635Q361 635 370 635T395 635T430 636T475 636T524 636H679Q694 628 694 616Q694 607 681 597L522 596H470H441Q366 596 338 592T266 568Q244 557 224 542T179 500T139 433T124 346V341Q124 253 185 185Q244 121 328 103Q348 98 366 98T522 96H681Q694 86 694 76Q694 64 679 56H526Q510 56 480 56T434 55Q350 55 289 71T172 141Q84 223 84 346ZM104 -131T104 -118T118 -98H679Q694 -106 694 -118T679 -138H118Q104 -131 104 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2286" xlink:href="#MJX-10-TEX-N-2286"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '20',
    latex: '\\supseteq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-2287" d="M83 616Q83 628 98 636H251Q267 636 297 636T343 637Q427 637 488 621T605 551Q693 470 693 346Q693 261 650 195T545 96T415 57Q407 56 251 56H98Q83 64 83 76Q83 86 96 96H255H308H337Q412 96 439 100T512 124Q533 135 553 150T599 192T639 259T654 346Q654 437 592 507Q557 545 512 568Q468 587 439 591T335 596H306H255L96 597Q83 607 83 616ZM84 -131T84 -118T98 -98H659Q674 -106 674 -118T659 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2287" xlink:href="#MJX-11-TEX-N-2287"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '21',
    latex: '\\sqsubset',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-12-TEX-N-228F" d="M83 523Q87 535 99 539H679Q694 531 694 519Q694 506 679 499H123V-1H678Q694 -7 694 -21Q694 -34 679 -41H98Q93 -38 84 -28L83 247V523Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="228F" xlink:href="#MJX-12-TEX-N-228F"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '22',
    latex: '\\sqsupset',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-2290" d="M64 506T64 519T78 539H699Q706 536 714 526V-28Q706 -38 699 -41H78Q64 -34 64 -21Q64 -6 80 -1H674V499H78Q64 506 64 519Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2290" xlink:href="#MJX-13-TEX-N-2290"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '23',
    latex: ' \\sqsubseteq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-14-TEX-N-2291" d="M94 620Q98 632 110 636H699Q714 628 714 616T699 596H134V96H698Q714 90 714 76Q714 64 699 56H109Q104 59 95 69L94 344V620ZM84 -118Q84 -103 100 -98H698Q714 -104 714 -118Q714 -130 699 -138H98Q84 -131 84 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2291" xlink:href="#MJX-14-TEX-N-2291"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '24',
    latex: '\\sqsupseteq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-2292" d="M64 603T64 616T78 636H668Q675 633 683 623V69Q675 59 668 56H78Q64 63 64 76Q64 91 80 96H643V596H78Q64 603 64 616ZM64 -118Q64 -108 79 -98H678Q694 -104 694 -118Q694 -130 679 -138H78Q64 -131 64 -118Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2292" xlink:href="#MJX-15-TEX-N-2292"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '25',
    latex: '\\cong',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-2-TEX-N-2245" d="M55 388Q55 463 101 526T222 589Q260 589 296 571T362 526T421 474T484 430T554 411Q616 411 655 458T694 560Q694 572 698 580T708 589Q722 589 722 556Q722 482 677 419T562 356H554Q517 356 481 374T414 418T355 471T292 515T223 533Q179 533 145 508Q109 479 96 440T80 378T69 355Q55 355 55 388ZM56 236Q56 249 70 256H707Q722 248 722 236Q722 225 708 217L390 216H72Q56 221 56 236ZM56 42Q56 57 72 62H708Q722 52 722 42Q722 30 707 22H70Q56 29 56 42Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2245" xlink:href="#MJX-2-TEX-N-2245"></use></g></g></g></g></g></g></svg>'
  },{
    id: '27',
    latex: '\\bowtie',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.036ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 900 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-12-TEX-N-22C8" d="M833 50T833 250T832 450T659 351T487 250T658 150T832 50Q833 50 833 250ZM873 10Q866 -5 854 -5Q851 -5 845 -3L449 226L260 115Q51 -5 43 -5Q39 -5 35 -1T28 7L26 11V489Q33 505 43 505Q51 505 260 385L449 274L845 503Q851 505 853 505Q866 505 873 490V10ZM412 250L67 450Q66 450 66 250T67 50Q69 51 240 150T412 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22C8" xlink:href="#MJX-12-TEX-N-22C8"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '28',
    latex: '\\propto',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-221D" d="M56 124T56 216T107 375T238 442Q260 442 280 438T319 425T352 407T382 385T406 361T427 336T442 315T455 297T462 285L469 297Q555 442 679 442Q687 442 722 437V398H718Q710 400 694 400Q657 400 623 383T567 343T527 294T503 253T495 235Q495 231 520 192T554 143Q625 44 696 44Q717 44 719 46H722V-5Q695 -11 678 -11Q552 -11 457 141Q455 145 454 146L447 134Q362 -11 235 -11Q157 -11 107 56ZM93 213Q93 143 126 87T220 31Q258 31 292 48T349 88T389 137T413 178T421 196Q421 200 396 239T362 288Q322 345 288 366T213 387Q163 387 128 337T93 213Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="221D" xlink:href="#MJX-13-TEX-N-221D"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '29',
    latex: '\\in',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-14-TEX-N-2208" d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2208" xlink:href="#MJX-14-TEX-N-2208"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '30',
    latex: '\\ni',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-220B" d="M83 520Q83 532 98 540H195Q202 540 220 540T249 541Q404 541 494 455Q582 374 582 250Q582 165 539 99T434 0T304 -39Q297 -40 195 -40H98Q83 -32 83 -20Q83 -10 96 0H200Q311 1 337 6Q369 14 401 28Q422 39 445 55Q484 85 508 127T537 191T542 228V230H98Q84 237 84 250T98 270H542V272Q542 280 539 295T527 336T497 391T445 445Q422 461 401 472Q386 479 374 483T347 491T325 495T298 498T273 499T239 500T200 500L96 501Q83 511 83 520Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="220B" xlink:href="#MJX-15-TEX-N-220B"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '31',
    latex: '\\vdash',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.382ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 611 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-16-TEX-N-22A2" d="M55 678Q55 679 56 681T58 684T61 688T65 691T70 693T77 694Q88 692 95 679V367H540Q555 359 555 347Q555 334 540 327H95V15Q88 2 77 0Q73 0 70 1T65 3T61 6T59 9T57 13T55 16V678Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22A2" xlink:href="#MJX-16-TEX-N-22A2"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '32',
    latex: '\\dashv',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.382ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 611 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-17-TEX-N-22A3" d="M515 678Q515 679 516 681T518 684T521 688T525 691T530 693T537 694Q548 692 555 679V15Q548 2 537 0Q533 0 530 1T525 3T521 6T519 9T517 13T515 16V327H71Q70 327 67 329T59 336T55 347T59 358T66 365T71 367H515V678Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22A3" xlink:href="#MJX-17-TEX-N-22A3"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '33',
    latex: '\\models',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.962ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 867 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-18-TEX-N-22A8" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V367H796Q811 359 811 347Q811 336 797 328L479 327H161L159 328V172L161 173H797Q798 172 800 171T803 169T805 167T808 164T809 162T810 158T811 153Q811 140 796 133H159V-235Q151 -249 141 -249H139Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22A8" xlink:href="#MJX-18-TEX-N-22A8"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '34',
    latex: '\\mid',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="0.629ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 278 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-19-TEX-N-2223" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2223" xlink:href="#MJX-19-TEX-N-2223"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '35',
    latex: '\\parallel',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-20-TEX-N-2225" d="M133 736Q138 750 153 750Q164 750 170 739Q172 735 172 250T170 -239Q164 -250 152 -250Q144 -250 138 -244L137 -243Q133 -241 133 -179T132 250Q132 731 133 736ZM329 739Q334 750 346 750Q353 750 361 744L362 743Q366 741 366 679T367 250T367 -178T362 -243L361 -244Q355 -250 347 -250Q335 -250 329 -239Q327 -235 327 250T329 739Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2225" xlink:href="#MJX-20-TEX-N-2225"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '36',
    latex: '\\perp',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-21-TEX-N-22A5" d="M369 652Q369 653 370 655T372 658T375 662T379 665T384 667T391 668Q402 666 409 653V40H708Q723 32 723 20T708 0H71Q70 0 67 2T59 9T55 20T59 31T66 38T71 40H369V652Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="22A5" xlink:href="#MJX-21-TEX-N-22A5"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '37',
    latex: '\\smile',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2323" d="M923 378Q944 378 944 358Q944 345 912 311T859 259Q710 134 500 134Q288 134 140 259Q55 336 55 358Q55 366 61 372T75 378Q78 378 84 376Q86 376 101 356T147 310T221 257T339 212T500 193Q628 193 734 236Q841 282 903 363Q914 378 923 378Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2323" xlink:href="#MJX-6-TEX-N-2323"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '38',
    latex: '\\frown',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-2322" d="M55 141Q55 149 72 174T125 234T209 303T329 360T478 388H526Q649 383 765 319Q814 291 858 250T923 179T944 141Q944 133 938 128T924 122Q914 124 912 125T902 139Q766 328 500 328Q415 328 342 308T225 258T150 199T102 148T84 124Q81 122 75 122Q55 127 55 141Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2322" xlink:href="#MJX-7-TEX-N-2322"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '39',
    latex: '\\asymp',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-2248" d="M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2248" xlink:href="#MJX-11-TEX-N-2248"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '40',
    latex: ':',
    text: ':'
  }, {
    id: '41',
    latex: '\\notin',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.509ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 667 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-12-TEX-N-2209" d="M196 25Q84 109 84 250Q84 372 166 450T360 539Q361 539 375 539T413 540T460 540L547 707Q550 716 563 716Q570 716 575 712T581 703T583 696T505 540H568Q583 532 583 520Q583 511 570 501L484 500L366 270H568Q583 262 583 250T568 230H346L247 38Q284 16 328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 447 -40T419 -41Q304 -41 228 3Q117 -211 115 -212Q111 -215 104 -215T92 -212T86 -204T84 -197Q84 -190 89 -183L196 25ZM214 61L301 230H124V228Q124 196 147 147T214 61ZM321 270L440 500Q353 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H321Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2209" xlink:href="#MJX-12-TEX-N-2209"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '42',
    latex: '\\ne',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-2260" d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2260" xlink:href="#MJX-13-TEX-N-2260"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '43',
    latex: '\\triangleq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.509ex" role="img" focusable="false" viewBox="0 -804.5 778 1109" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.689ex;"><defs><path id="MJX-6-TEX-N-225C" d="M192 482H190Q187 483 185 484T181 488T177 493T175 501Q175 506 178 512Q184 523 278 687T375 853Q379 857 383 857Q385 857 387 858T390 859Q397 859 403 853Q405 851 499 687T600 512Q603 506 603 501Q603 488 587 482H192ZM548 523L389 798Q388 798 309 661T230 523T389 522T548 523ZM56 347Q56 360 70 367H708Q723 359 723 347Q723 336 709 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H709Q723 163 723 153Q723 140 708 133H70Q56 140 56 153Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-54.5)"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="225C" xlink:href="#MJX-6-TEX-N-225C"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '44',
    latex: '⊄',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-2282" d="M84 250Q84 372 166 450T360 539Q361 539 370 539T395 539T430 540T475 540T524 540H679Q694 532 694 520Q694 511 681 501L522 500H470H441Q366 500 338 496T266 472Q244 461 224 446T179 404T139 337T124 250V245Q124 157 185 89Q244 25 328 7Q348 2 366 2T522 0H681Q694 -10 694 -20Q694 -32 679 -40H526Q510 -40 480 -40T434 -41Q350 -41 289 -25T172 45Q84 127 84 250Z"></path><path id="MJX-5-TEX-N-338" d="M-612 -215T-619 -215T-631 -212T-637 -204T-639 -197Q-639 -190 -634 -183Q-621 -157 -400 274T-176 707Q-173 716 -160 716Q-153 716 -148 712T-142 703T-140 696Q-140 691 -372 241T-608 -212Q-612 -215 -619 -215Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><g data-c="2284"><use data-c="2282" xlink:href="#MJX-5-TEX-N-2282"></use><use data-c="338" xlink:href="#MJX-5-TEX-N-338" transform="translate(778,0)"></use></g></g></g></g></g></g></g></svg>'
  }, {
    id: '45',
    latex: '\\varnothing',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 778 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-V-2205" d="M624 470Q624 468 639 446T668 382T683 291Q683 181 612 99T437 -1Q425 -2 387 -2T337 -1Q245 18 193 70L179 81L131 39Q96 8 89 3T75 -3Q55 -3 55 17Q55 24 61 30T111 73Q154 113 151 113Q151 114 140 130T115 177T95 241Q94 253 94 291T95 341Q112 431 173 495Q265 587 385 587Q410 587 437 581Q522 571 582 513L595 501L642 541Q689 586 695 586Q696 586 697 586T699 587Q706 587 713 583T720 568Q720 560 711 551T664 510Q651 499 642 490T628 475T624 470ZM564 477Q517 522 448 539Q428 546 375 546Q290 546 229 492T144 370Q133 332 133 279Q136 228 151 195Q157 179 168 160T184 141Q186 141 375 307T564 477ZM642 290Q642 318 637 343T625 386T611 416T598 436T593 444Q590 444 402 277T213 108Q213 104 231 89T293 55T392 37Q495 37 568 111T642 290Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mi"><use data-c="2205" xlink:href="#MJX-8-TEX-V-2205"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '46',
    latex: '\\subsetneqq',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.643ex" role="img" focusable="false" viewBox="0 -834 778 1168" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.756ex;"><defs><path id="MJX-9-TEX-N-2ACB" d="M693 221Q693 214 680 201H524Q398 201 367 202T309 212Q236 230 180 280T98 398Q84 438 84 492T98 585Q126 663 193 716T346 781Q347 781 373 781T440 782T520 783H680Q682 780 686 776T691 770T693 763T680 743H526Q364 743 353 741Q279 730 221 687T138 578Q124 540 124 492T138 405Q163 340 221 297T353 243Q364 241 526 241H680Q682 238 686 234T691 228T693 221ZM82 -48T82 -41T95 -19H462L513 41L569 105Q574 110 582 110T596 104T602 90Q602 87 600 83Q600 77 555 30L515 -17L600 -19H682Q693 -30 693 -38T680 -59H480L415 -137L349 -213L515 -215H682Q693 -226 693 -233T680 -255H313L260 -317Q224 -360 212 -372T192 -385Q184 -385 179 -377T173 -362Q174 -361 218 -306L260 -255H178L93 -253L86 -248Q82 -243 82 -235Q82 -226 93 -215H195L295 -213L362 -137L426 -59H260L93 -57L86 -53Q82 -48 82 -41Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,51)"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2ACB" xlink:href="#MJX-9-TEX-N-2ACB"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '47',
    latex: '\\complement',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.48ex" role="img" focusable="false" viewBox="0 -798 500 1096" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.674ex;"><defs><path id="MJX-10-TEX-I-2201" d="M404 269Q412 269 418 267T428 261T435 253T441 245L444 240V172Q444 103 443 96Q440 81 431 65T403 27T344 -7T250 -21T156 -8T97 27T69 65T58 96Q56 103 56 413Q56 722 58 729Q74 822 215 845Q221 846 229 846H243Q282 846 290 845Q422 826 443 729Q444 722 444 653V586L442 583Q441 580 440 578T436 573T430 567T423 562T415 558T404 556Q377 556 367 583Q364 590 364 654V719Q363 721 360 726T355 733Q326 766 250 766H249Q235 766 219 765T174 752T137 719V107Q145 83 178 71T251 58H254Q340 58 364 107V172Q364 176 364 187T363 204Q363 269 404 269Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-48)"><g data-mml-node="mtd"><g data-mml-node="mi"><use data-c="2201" xlink:href="#MJX-10-TEX-I-2201"></use></g></g></g></g></g></g></svg>'
  }, {
    id: '48',
    latex: '\\complement_{U}A',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="4.243ex" height="2.48ex" role="img" focusable="false" viewBox="0 -798 1875.4 1096" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.674ex;"><defs><path id="MJX-11-TEX-I-2201" d="M404 269Q412 269 418 267T428 261T435 253T441 245L444 240V172Q444 103 443 96Q440 81 431 65T403 27T344 -7T250 -21T156 -8T97 27T69 65T58 96Q56 103 56 413Q56 722 58 729Q74 822 215 845Q221 846 229 846H243Q282 846 290 845Q422 826 443 729Q444 722 444 653V586L442 583Q441 580 440 578T436 573T430 567T423 562T415 558T404 556Q377 556 367 583Q364 590 364 654V719Q363 721 360 726T355 733Q326 766 250 766H249Q235 766 219 765T174 752T137 719V107Q145 83 178 71T251 58H254Q340 58 364 107V172Q364 176 364 187T363 204Q363 269 404 269Z"></path><path id="MJX-11-TEX-I-1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z"></path><path id="MJX-11-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-48)"><g data-mml-node="mtd"><g data-mml-node="msub"><g data-mml-node="mi"><use data-c="2201" xlink:href="#MJX-11-TEX-I-2201"></use></g><g data-mml-node="TeXAtom" transform="translate(533,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><use data-c="1D448" xlink:href="#MJX-11-TEX-I-1D448"></use></g></g></g><g data-mml-node="mi" transform="translate(1125.4,0)"><use data-c="1D434" xlink:href="#MJX-11-TEX-I-1D434"></use></g></g></g></g></g></g></svg>'
  }
]

// 箭头符号
const arrowLatex: DataItem[] = [
  {
    id: '1',
    latex: '\\gets',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-N-2190" d="M944 261T944 250T929 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H929Q944 261 944 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2190" xlink:href="#MJX-6-TEX-N-2190"></use></g></g></g></g></g></g></svg>'
  },{
    id: '2',
    latex: '\\to',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2192" xlink:href="#MJX-7-TEX-N-2192"></use></g></g></g></g></g></g></svg>'
  },{
    id: '3',
    latex: '\\longleftarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="3.64ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1609 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-27F5" d="M165 270H1510Q1525 262 1525 250T1510 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27F5" xlink:href="#MJX-8-TEX-N-27F5"></use></g></g></g></g></g></g></svg>'
  },{
    id: '4',
    latex: '\\longrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="3.706ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1638 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-27F6" d="M84 237T84 250T98 270H1444Q1328 357 1301 493Q1301 494 1301 496T1300 499Q1300 511 1317 511H1320Q1329 511 1332 510T1338 506T1341 497T1344 481T1352 456Q1374 389 1425 336T1544 261Q1553 258 1553 250Q1553 244 1548 241T1524 231T1486 212Q1445 186 1415 152T1370 85T1349 35T1341 4Q1339 -6 1336 -8T1320 -11Q1300 -11 1300 0Q1300 7 1305 25Q1337 151 1444 230H98Q84 237 84 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27F6" xlink:href="#MJX-9-TEX-N-27F6"></use></g></g></g></g></g></g></svg>'
  },{
    id: '5',
    latex: '\\uparrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-2191" d="M27 414Q17 414 17 433Q17 437 17 439T17 444T19 447T20 450T22 452T26 453T30 454T36 456Q80 467 120 494T180 549Q227 607 238 678Q240 694 251 694Q259 694 261 684Q261 677 265 659T284 608T320 549Q340 525 363 507T405 479T440 463T467 455T479 451Q483 447 483 433Q483 413 472 413Q467 413 458 416Q342 448 277 545L270 555V-179Q262 -193 252 -193H250H248Q236 -193 230 -179V555L223 545Q192 499 146 467T70 424T27 414Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2191" xlink:href="#MJX-10-TEX-N-2191"></use></g></g></g></g></g></g></svg>'
  },{
    id: '6',
    latex: '\\downarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 500 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-2193" d="M473 86Q483 86 483 67Q483 63 483 61T483 56T481 53T480 50T478 48T474 47T470 46T464 44Q428 35 391 14T316 -55T264 -168Q264 -170 263 -173T262 -180T261 -184Q259 -194 251 -194Q242 -194 238 -176T221 -121T180 -49Q169 -34 155 -21T125 2T95 20T67 33T44 42T27 47L21 49Q17 53 17 67Q17 87 28 87Q33 87 42 84Q158 52 223 -45L230 -55V312Q230 391 230 482T229 591Q229 662 231 676T243 693Q244 694 251 694Q264 692 270 679V-55L277 -45Q307 1 353 33T430 76T473 86Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2193" xlink:href="#MJX-11-TEX-N-2193"></use></g></g></g></g></g></g></svg>'
  },{
    id: '7',
    latex: '\\updownarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.362ex" role="img" focusable="false" viewBox="0 -772 500 1044" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.615ex;"><defs><path id="MJX-12-TEX-N-2195" d="M27 492Q17 492 17 511Q17 515 17 517T17 522T19 525T20 528T22 530T26 531T30 532T36 534Q80 545 120 572T180 627Q210 664 223 701T238 755T250 772T261 762Q261 757 264 741T282 691T319 628Q352 589 390 566T454 536L479 529Q483 525 483 511Q483 491 472 491Q467 491 458 494Q342 526 277 623L270 633V-133L277 -123Q307 -77 353 -45T430 -2T473 8Q483 8 483 -11Q483 -15 483 -17T483 -22T481 -25T480 -28T478 -30T474 -31T470 -32T464 -34Q407 -49 364 -84T300 -157T270 -223T261 -262Q259 -272 250 -272Q242 -272 239 -255T223 -201T180 -127Q169 -112 155 -99T125 -76T95 -58T67 -45T44 -36T27 -31L21 -29Q17 -25 17 -11Q17 9 28 9Q33 9 42 6Q158 -26 223 -123L230 -133V633L223 623Q192 577 146 545T70 502T27 492Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2195" xlink:href="#MJX-12-TEX-N-2195"></use></g></g></g></g></g></g></svg>'
  },{
    id: '8',
    latex: '\\leftrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-2194" d="M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2194" xlink:href="#MJX-13-TEX-N-2194"></use></g></g></g></g></g></g></svg>'
  },{
    id: '9',
    latex: '\\Uparrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.382ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 611 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-14-TEX-N-21D1" d="M228 -179Q227 -180 226 -182T223 -186T221 -189T218 -192T214 -193T208 -194Q196 -194 189 -181L188 125V430L176 419Q122 369 59 338Q46 330 40 330Q38 330 31 337V350Q31 362 33 365T46 374Q60 381 77 390T128 426T190 484T247 567T292 677Q295 688 298 692Q302 694 305 694Q313 694 318 677Q334 619 363 568T420 485T481 427T532 391T564 374Q575 368 577 365T579 350V337Q572 330 570 330Q564 330 551 338Q487 370 435 419L423 430L422 125V-181Q409 -194 401 -194Q397 -194 394 -193T388 -189T385 -184T382 -180V-177V475L373 487Q331 541 305 602Q304 601 300 591T290 571T278 548T260 519T238 488L229 476L228 148V-179Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D1" xlink:href="#MJX-14-TEX-N-21D1"></use></g></g></g></g></g></g></svg>'
  },{
    id: '10',
    latex: '\\Downarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.382ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 611 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-21D3" d="M401 694Q412 694 422 681V375L423 70L435 81Q487 130 551 162Q564 170 570 170Q572 170 579 163V150Q579 138 577 135T564 126Q541 114 518 99T453 48T374 -46T318 -177Q313 -194 305 -194T293 -178T272 -119T225 -31Q158 70 46 126Q35 132 33 135T31 150V163Q38 170 40 170Q46 170 59 162Q122 131 176 81L188 70V375L189 681Q199 694 208 694Q219 694 228 680V352L229 25L238 12Q279 -42 305 -102Q344 -23 373 13L382 25V678Q387 692 401 694Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D3" xlink:href="#MJX-15-TEX-N-21D3"></use></g></g></g></g></g></g></svg>'
  },{
    id: '11',
    latex: '\\Updownarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.382ex" height="2.362ex" role="img" focusable="false" viewBox="0 -772 611 1044" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.615ex;"><defs><path id="MJX-16-TEX-N-21D5" d="M290 755Q298 772 305 772T318 757T343 706T393 633Q431 588 473 558T545 515T579 497V484Q579 464 570 464Q564 464 550 470Q485 497 423 550L422 400V100L423 -50Q485 3 550 30Q565 36 570 36Q579 36 579 16V3Q575 -1 549 -12T480 -53T393 -132Q361 -172 342 -208T318 -258T305 -272T293 -258T268 -208T217 -132Q170 -80 128 -51T61 -12T31 3V16Q31 36 40 36Q46 36 61 30Q86 19 109 6T146 -18T173 -38T188 -50V550Q186 549 173 539T147 519T110 495T61 470Q46 464 40 464Q31 464 31 484V497Q34 500 63 513T135 557T217 633Q267 692 290 755ZM374 598Q363 610 351 625T332 651T316 676T305 695L294 676Q282 657 267 636T236 598L228 589V-89L236 -98Q247 -110 259 -125T278 -151T294 -176T305 -195L316 -176Q328 -157 343 -136T374 -98L382 -89V589L374 598Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D5" xlink:href="#MJX-16-TEX-N-21D5"></use></g></g></g></g></g></g></svg>'
  },{
    id: '12',
    latex: '\\longleftrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="4.206ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1859 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-17-TEX-N-27F7" d="M165 270H1694Q1578 357 1551 493Q1551 494 1551 496T1550 499Q1550 511 1567 511H1570Q1579 511 1582 510T1588 506T1591 497T1594 481T1602 456Q1624 389 1675 336T1794 261Q1803 258 1803 250Q1803 244 1798 241T1774 231T1736 212Q1695 186 1665 152T1620 85T1599 35T1591 4Q1589 -6 1586 -8T1570 -11Q1550 -11 1550 0Q1550 7 1555 25Q1587 151 1694 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27F7" xlink:href="#MJX-17-TEX-N-27F7"></use></g></g></g></g></g></g></svg>'
  },{
    id: '13',
    latex: '\\Leftarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-21D0" d="M944 153Q944 140 929 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H929Q944 359 944 347Q944 336 930 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173H930Q931 172 933 171T936 169T938 167T941 164T942 162T943 158T944 153Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D0" xlink:href="#MJX-7-TEX-N-21D0"></use></g></g></g></g></g></g></svg>'
  },{
    id: '14',
    latex: '\\Longleftarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="3.64ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1609 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-27F8" d="M274 173H1539Q1540 172 1542 171T1545 169T1547 167T1550 164T1551 162T1552 158T1553 153Q1553 140 1538 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H1538Q1553 359 1553 347Q1553 336 1539 328L1221 327H903L900 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27F8" xlink:href="#MJX-8-TEX-N-27F8"></use></g></g></g></g></g></g></svg>'
  },{
    id: '15',
    latex: '\\Rightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-21D2" d="M580 514Q580 525 596 525Q601 525 604 525T609 525T613 524T615 523T617 520T619 517T622 512Q659 438 720 381T831 300T927 263Q944 258 944 250T935 239T898 228T840 204Q696 134 622 -12Q618 -21 615 -22T600 -24Q580 -24 580 -17Q580 -13 585 0Q620 69 671 123L681 133H70Q56 140 56 153Q56 168 72 173H725L735 181Q774 211 852 250Q851 251 834 259T789 283T735 319L725 327H72Q56 332 56 347Q56 360 70 367H681L671 377Q638 412 609 458T580 514Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D2" xlink:href="#MJX-9-TEX-N-21D2"></use></g></g></g></g></g></g></svg>'
  },{
    id: '16',
    latex: '\\Longrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="3.706ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1638 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-27F9" d="M1218 514Q1218 525 1234 525Q1239 525 1242 525T1247 525T1251 524T1253 523T1255 520T1257 517T1260 512Q1297 438 1358 381T1469 300T1565 263Q1582 258 1582 250T1573 239T1536 228T1478 204Q1334 134 1260 -12Q1256 -21 1253 -22T1238 -24Q1218 -24 1218 -17Q1218 -13 1223 0Q1258 69 1309 123L1319 133H70Q56 140 56 153Q56 168 72 173H1363L1373 181Q1412 211 1490 250Q1489 251 1472 259T1427 283T1373 319L1363 327H710L707 328L390 327H72Q56 332 56 347Q56 360 70 367H1319L1309 377Q1276 412 1247 458T1218 514Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27F9" xlink:href="#MJX-10-TEX-N-27F9"></use></g></g></g></g></g></g></svg>'
  },{
    id: '17',
    latex: '\\Leftrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-21D4" d="M308 524Q318 526 323 526Q340 526 340 514Q340 507 336 499Q326 476 314 454T292 417T274 391T260 374L255 368Q255 367 500 367Q744 367 744 368L739 374Q734 379 726 390T707 416T685 453T663 499Q658 511 658 515Q658 525 680 525Q687 524 690 523T695 519T701 507Q766 359 902 287Q921 276 939 269T961 259T966 250Q966 246 965 244T960 240T949 236T930 228T902 213Q763 137 701 -7Q697 -16 695 -19T690 -23T680 -25Q658 -25 658 -15Q658 -11 663 1Q673 24 685 46T707 83T725 109T739 126L744 132Q744 133 500 133Q255 133 255 132L260 126Q265 121 273 110T292 84T314 47T336 1Q341 -11 341 -15Q341 -25 319 -25Q312 -24 309 -23T304 -19T298 -7Q233 141 97 213Q83 221 70 227T51 235T41 239T35 243T34 250T35 256T40 261T51 265T70 273T97 287Q235 363 299 509Q305 522 308 524ZM792 319L783 327H216Q183 294 120 256L110 250L120 244Q173 212 207 181L216 173H783L792 181Q826 212 879 244L889 250L879 256Q826 288 792 319Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21D4" xlink:href="#MJX-11-TEX-N-21D4"></use></g></g></g></g></g></g></svg>'
  },{
    id: '18',
    latex: '\\Longleftrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="4.204ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1858 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-12-TEX-N-27FA" d="M1438 514Q1438 525 1454 525Q1459 525 1462 525T1467 525T1471 524T1473 523T1475 520T1477 517T1480 512Q1517 438 1578 381T1689 300T1785 263Q1802 258 1802 250T1793 239T1756 228T1698 204Q1554 134 1480 -12Q1476 -21 1473 -22T1458 -24Q1438 -24 1438 -17Q1438 -13 1443 0Q1478 69 1529 123L1539 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H1539L1529 377Q1496 412 1467 458T1438 514ZM274 173H1583L1593 181Q1632 211 1710 250Q1709 251 1692 259T1647 283T1593 319L1583 327H930L927 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27FA" xlink:href="#MJX-12-TEX-N-27FA"></use></g></g></g></g></g></g></svg>'
  },{
    id: '19',
    latex: '\\mapsto',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-13-TEX-N-21A6" d="M95 155V109Q95 83 92 73T75 63Q61 63 58 74T54 130Q54 140 54 180T55 250Q55 421 57 425Q61 437 75 437Q88 437 91 428T95 393V345V270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H95V155Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21A6" xlink:href="#MJX-13-TEX-N-21A6"></use></g></g></g></g></g></g></svg>'
  },{
    id: '20',
    latex: '\\longmapsto',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="3.706ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1638 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-14-TEX-N-27FC" d="M95 155V109Q95 83 92 73T75 63Q61 63 58 74T54 130Q54 140 54 180T55 250Q55 421 57 425Q61 437 75 437Q88 437 91 428T95 393V345V270H1444Q1328 357 1301 493Q1301 494 1301 496T1300 499Q1300 511 1317 511H1320Q1329 511 1332 510T1338 506T1341 497T1344 481T1352 456Q1374 389 1425 336T1544 261Q1553 258 1553 250Q1553 244 1548 241T1524 231T1486 212Q1445 186 1415 152T1370 85T1349 35T1341 4Q1339 -6 1336 -8T1320 -11Q1300 -11 1300 0Q1300 7 1305 25Q1337 151 1444 230H95V155Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="27FC" xlink:href="#MJX-14-TEX-N-27FC"></use></g></g></g></g></g></g></svg>'
  },{
    id: '21',
    latex: '\\nearrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-2197" d="M582 697Q582 701 591 710T605 720Q607 720 630 706T697 677T795 662Q830 662 863 670T914 686T934 694Q942 694 944 685Q944 680 936 663T921 615T913 545Q913 490 927 446T956 379T970 355Q970 351 961 342T947 332Q940 332 929 349Q874 436 874 541Q874 590 878 598L832 553Q787 508 673 395T482 204Q87 -191 83 -193Q77 -195 75 -195Q67 -195 61 -189T55 -174Q55 -170 56 -168Q58 -164 453 232Q707 487 777 557T847 628Q824 623 787 623Q689 623 599 679Q582 690 582 697Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2197" xlink:href="#MJX-15-TEX-N-2197"></use></g></g></g></g></g></g></svg>'
  },{
    id: '22',
    latex: '\\searrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-16-TEX-N-2198" d="M55 675Q55 683 60 689T75 695Q77 695 83 693Q87 691 482 296Q532 246 605 174T717 62T799 -20T859 -80T878 -97Q874 -93 874 -41Q874 64 929 151Q940 168 947 168Q951 168 960 159T970 145Q970 143 956 121T928 54T913 -45Q913 -83 920 -114T936 -163T944 -185Q942 -194 934 -194Q932 -194 914 -186T864 -170T795 -162Q743 -162 698 -176T630 -205T605 -220Q601 -220 592 -211T582 -197Q582 -187 611 -170T691 -138T787 -123Q824 -123 847 -128Q848 -128 778 -57T453 268Q58 664 56 668Q55 670 55 675Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2198" xlink:href="#MJX-16-TEX-N-2198"></use></g></g></g></g></g></g></svg>'
  },{
    id: '23',
    latex: '\\swarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-17-TEX-N-2199" d="M126 -41Q126 -92 121 -97Q121 -98 139 -80T200 -20T281 61T394 173T517 296Q909 690 916 693Q922 695 924 695Q932 695 938 689T944 674Q944 670 943 668Q942 664 546 268Q292 13 222 -57T153 -128Q176 -123 212 -123Q310 -123 400 -179Q417 -190 417 -197Q417 -201 408 -210T394 -220Q392 -220 369 -206T302 -177T204 -162Q131 -162 67 -194Q63 -195 59 -192T55 -183Q55 -180 62 -163T78 -115T86 -45Q86 10 72 54T44 120T29 145Q29 149 38 158T52 168Q59 168 70 151Q126 62 126 -41Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2199" xlink:href="#MJX-17-TEX-N-2199"></use></g></g></g></g></g></g></svg>'
  },{
    id: '24',
    latex: '\\nwarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-18-TEX-N-2196" d="M204 662Q257 662 301 676T369 705T394 720Q398 720 407 711T417 697Q417 688 389 671T310 639T212 623Q176 623 153 628Q151 628 221 557T546 232Q942 -164 943 -168Q944 -170 944 -174Q944 -182 938 -188T924 -195Q922 -195 916 -193Q912 -191 517 204Q440 281 326 394T166 553L121 598Q126 589 126 541Q126 438 70 349Q59 332 52 332Q48 332 39 341T29 355Q29 358 38 372T57 407T77 464T86 545Q86 583 78 614T63 663T55 683Q55 693 65 693Q73 693 82 688Q136 662 204 662Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="2196" xlink:href="#MJX-18-TEX-N-2196"></use></g></g></g></g></g></g></svg>'
  },{
    id: '25',
    latex: '\\hookleftarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.548ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1126 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-4-TEX-N-21A9" d="M903 424T903 444T929 464Q976 464 1023 434T1070 347Q1070 316 1055 292T1016 256T971 237T929 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H926Q929 270 941 271T960 275T978 280T998 290T1015 307Q1030 325 1030 347Q1030 355 1027 364T1014 387T983 411T929 424H928Q903 424 903 444Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21A9" xlink:href="#MJX-4-TEX-N-21A9"></use></g></g></g></g></g></g></svg>'
  },{
    id: '26',
    latex: '\\hookrightarrow',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.548ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1126 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-5-TEX-N-21AA" d="M55 347Q55 380 72 404T113 441T159 458T197 464Q222 464 222 444Q222 429 204 426T157 417T110 387Q95 369 95 347Q95 339 98 330T111 307T142 283T196 270H961Q845 357 818 493Q818 494 818 496T817 499Q817 511 834 511H837Q846 511 849 510T855 506T858 497T861 481T869 456Q891 389 942 336T1061 261Q1070 258 1070 250Q1070 244 1065 241T1041 231T1003 212Q962 186 932 152T887 85T866 35T858 4Q856 -6 853 -8T837 -11Q817 -11 817 0Q817 7 822 25Q854 151 961 230H196Q149 230 102 260T55 347Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21AA" xlink:href="#MJX-5-TEX-N-21AA"></use></g></g></g></g></g></g></svg>'
  },{
    id: '27',
    latex: '\\rightleftharpoons',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-6-TEX-V-21CC" d="M755 512Q755 514 778 514H801L804 503Q805 501 812 486T824 462T839 437T862 408T892 381T932 354L944 347V327H507Q70 327 67 329Q55 335 55 347T67 365Q70 367 454 367H837L828 376Q803 403 785 437T761 489T755 512ZM55 153V173H492Q928 173 932 171Q944 166 944 153T932 135Q928 133 545 133H162L171 124Q198 95 216 61T239 8L244 -12Q244 -14 221 -14H198L195 -4Q160 95 67 146L55 153Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21CC" xlink:href="#MJX-6-TEX-V-21CC"></use></g></g></g></g></g></g></svg>'
  },{
    id: '28',
    latex: '\\iff',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="5.462ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2414 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-7-TEX-N-27FA" d="M1438 514Q1438 525 1454 525Q1459 525 1462 525T1467 525T1471 524T1473 523T1475 520T1477 517T1480 512Q1517 438 1578 381T1689 300T1785 263Q1802 258 1802 250T1793 239T1756 228T1698 204Q1554 134 1480 -12Q1476 -21 1473 -22T1458 -24Q1438 -24 1438 -17Q1438 -13 1443 0Q1478 69 1529 123L1539 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H1539L1529 377Q1496 412 1467 458T1438 514ZM274 173H1583L1593 181Q1632 211 1710 250Q1709 251 1692 259T1647 283T1593 319L1583 327H930L927 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mstyle"><g data-mml-node="mspace"></g></g><g data-mml-node="mo" transform="translate(278,0)"><use data-c="27FA" xlink:href="#MJX-7-TEX-N-27FA"></use></g><g data-mml-node="mstyle" transform="translate(2136,0)"><g data-mml-node="mspace"></g></g></g></g></g></g></g></svg>'
  },{
    id: '29',
    latex: '\\leftharpoonup',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-8-TEX-N-21BC" d="M62 230Q56 236 55 244Q55 252 57 255T69 265Q114 292 151 326T208 391T243 448T265 491T273 509Q276 511 288 511Q304 511 306 505Q309 501 303 484Q293 456 279 430T251 383T223 344T196 313T173 291T156 276L148 270H929Q944 261 944 250T929 230H62Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21BC" xlink:href="#MJX-8-TEX-N-21BC"></use></g></g></g></g></g></g></svg>'
  },{
    id: '30',
    latex: '\\rightharpoonup',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-9-TEX-N-21C0" d="M691 500Q691 511 711 511Q720 511 723 510T730 504T735 490T746 464T768 425Q796 378 835 339T897 285T933 263Q941 258 942 256T944 245T937 230H70Q56 237 56 250T70 270H852Q802 308 762 364T707 455T691 500Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21C0" xlink:href="#MJX-9-TEX-N-21C0"></use></g></g></g></g></g></g></svg>'
  },{
    id: '31',
    latex: '\\leftharpoondown',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-10-TEX-N-21BD" d="M55 256Q56 264 62 270H929Q944 261 944 250T929 230H148Q149 229 165 215T196 185T231 145T270 87T303 16Q309 -1 306 -5Q304 -11 288 -11Q279 -11 276 -10T269 -4T264 10T253 36T231 75Q172 173 69 235Q59 242 57 245T55 256Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21BD" xlink:href="#MJX-10-TEX-N-21BD"></use></g></g></g></g></g></g></svg>'
  },{
    id: '32',
    latex: '\\rightharpoondown',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1000 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-11-TEX-N-21C1" d="M56 237T56 250T70 270H937Q944 263 944 256Q944 251 944 250T943 246T940 242T933 238Q794 153 734 7Q729 -7 726 -9T711 -11Q695 -11 693 -5Q690 -1 696 16Q721 84 763 139T852 230H70Q56 237 56 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="mo"><use data-c="21C1" xlink:href="#MJX-11-TEX-N-21C1"></use></g></g></g></g></g></g></svg>'
  },{
    id: '33',
    latex: '↲',
    text: '↲'
  },
]

// 修饰符号
const modifierLatex: DataItem[] = [
  {
    id: '1',
    latex: '{2}^{\\circ}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.119ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 936.6 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-15-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-15-TEX-N-2218" d="M55 251Q55 328 112 386T249 444T386 388T444 249Q444 171 388 113T250 55Q170 55 113 112T55 251ZM245 403Q188 403 142 361T96 250Q96 183 141 140T250 96Q284 96 313 109T354 135T375 160Q403 197 403 250Q403 313 360 358T245 403Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="msup"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-15-TEX-N-32"></use></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><use data-c="2218" xlink:href="#MJX-15-TEX-N-2218"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '2',
    latex: '{2}^{\\prime}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.759ex" height="2.283ex" role="img" focusable="false" viewBox="0 -754.5 777.5 1009" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.576ex;"><defs><path id="MJX-18-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-18-TEX-V-2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-4.5)"><g data-mml-node="mtd"><g data-mml-node="msup"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-18-TEX-N-32"></use></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><use data-c="2032" xlink:href="#MJX-18-TEX-V-2032"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '3',
    latex: '{2}^{\\prime\\prime}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.199ex" height="2.283ex" role="img" focusable="false" viewBox="0 -754.5 971.9 1009" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.576ex;"><defs><path id="MJX-19-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-19-TEX-V-2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-4.5)"><g data-mml-node="mtd"><g data-mml-node="msup"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-19-TEX-N-32"></use></g></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><use data-c="2032" xlink:href="#MJX-19-TEX-V-2032"></use></g><g data-mml-node="mi" transform="translate(275,0)"><use data-c="2032" xlink:href="#MJX-19-TEX-V-2032"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '4',
    latex: '{2}^{\\prime\\prime\\prime}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="2.639ex" height="2.283ex" role="img" focusable="false" viewBox="0 -754.5 1166.4 1009" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.576ex;"><defs><path id="MJX-22-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-22-TEX-V-2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-4.5)"><g data-mml-node="mtd"><g data-mml-node="msup"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-22-TEX-N-32"></use></g></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><use data-c="2032" xlink:href="#MJX-22-TEX-V-2032"></use></g><g data-mml-node="mi" transform="translate(275,0)"><use data-c="2032" xlink:href="#MJX-22-TEX-V-2032"></use></g><g data-mml-node="mi" transform="translate(550,0)"><use data-c="2032" xlink:href="#MJX-22-TEX-V-2032"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '5',
    latex: '{2}^{\\backprime}{}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.759ex" height="2.283ex" role="img" focusable="false" viewBox="0 -754.5 777.5 1009" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.576ex;"><defs><path id="MJX-24-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-24-TEX-V-2035" d="M12 501Q12 527 31 542T63 558Q73 560 77 560Q114 560 128 528Q133 518 188 293T244 61Q244 56 223 50T195 43Q192 43 190 45T102 263T14 486Q12 496 12 501Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-4.5)"><g data-mml-node="mtd"><g data-mml-node="msup"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-24-TEX-N-32"></use></g></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><use data-c="2035" xlink:href="#MJX-24-TEX-V-2035"></use></g></g></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(777.5,0)"></g></g></g></g></g></g></svg>'
  },{
    id: '6',
    latex: '\\not{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.76ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 777.8 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;"><defs><path id="MJX-26-TEX-N-29F8" d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183Q157 -157 378 274T602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 691 406 241T170 -212Q166 -215 159 -215Z"></path><path id="MJX-26-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr"><g data-mml-node="mtd"><g data-mml-node="TeXAtom" data-mjx-texclass="REL"><g data-mml-node="mpadded"><g data-mml-node="mtext"><use data-c="29F8" xlink:href="#MJX-26-TEX-N-29F8"></use></g></g></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(277.8,0)"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-26-TEX-N-32"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '7',
    latex: '\\dot{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.808ex" role="img" focusable="false" viewBox="0 -870.5 500 1241" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.838ex;"><defs><path id="MJX-11-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-11-TEX-N-2D9" d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-120.5)"><g data-mml-node="mtd"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-11-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,222) translate(-250 0)"><use data-c="2D9" xlink:href="#MJX-11-TEX-N-2D9"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '8',
    latex: '\\ddot{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.796ex" role="img" focusable="false" viewBox="0 -868 500 1236" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.833ex;"><defs><path id="MJX-12-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-12-TEX-N-A8" d="M95 612Q95 633 112 651T153 669T193 652T210 612Q210 588 194 571T152 554L127 560Q95 577 95 612ZM289 611Q289 634 304 649T335 668Q336 668 340 668T346 669Q369 669 386 652T404 612T387 572T346 554Q323 554 306 570T289 611Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-118)"><g data-mml-node="mtd"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-12-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,217) translate(-250 0)"><use data-c="A8" xlink:href="#MJX-12-TEX-N-A8"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '9',
    latex: '\\dddot{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.5ex" height="2.808ex" role="img" focusable="false" viewBox="0 -870.5 500 1241" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.838ex;"><defs><path id="MJX-13-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-13-TEX-N-2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-120.5)"><g data-mml-node="mtd"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-13-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,771) translate(-417 0)"><use data-c="2E" xlink:href="#MJX-13-TEX-N-2E"></use><use data-c="2E" xlink:href="#MJX-13-TEX-N-2E" transform="translate(278,0)"></use><use data-c="2E" xlink:href="#MJX-13-TEX-N-2E" transform="translate(556,0)"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '10',
    latex: '\\underset{\\cdot}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.977ex" role="img" focusable="false" viewBox="0 -907.8 500 1315.6" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.923ex;"><defs><path id="MJX-14-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-14-TEX-N-22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,157.8)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-14-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(151.7,-600) scale(0.707)"><use data-c="22C5" xlink:href="#MJX-14-TEX-N-22C5"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '11',
    latex: '\\underset{\\cdot\\cdot}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.977ex" role="img" focusable="false" viewBox="0 -907.8 500 1315.6" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.923ex;"><defs><path id="MJX-17-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-17-TEX-N-22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,157.8)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-17-TEX-N-32"></use></g><g data-mml-node="mrow" transform="translate(53.4,-600) scale(0.707)"><g data-mml-node="mo"><use data-c="22C5" xlink:href="#MJX-17-TEX-N-22C5"></use></g><g data-mml-node="mo" transform="translate(278,0)"><use data-c="22C5" xlink:href="#MJX-17-TEX-N-22C5"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '12',
    latex: '\\underset{\\cdot\\cdot\\cdot}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.334ex" height="2.977ex" role="img" focusable="false" viewBox="0 -907.8 589.7 1315.6" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.923ex;"><defs><path id="MJX-18-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-18-TEX-N-22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,157.8)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn" transform="translate(44.9,0)"><use data-c="32" xlink:href="#MJX-18-TEX-N-32"></use></g><g data-mml-node="mrow" transform="translate(0,-600) scale(0.707)"><g data-mml-node="mo"><use data-c="22C5" xlink:href="#MJX-18-TEX-N-22C5"></use></g><g data-mml-node="mo" transform="translate(278,0)"><use data-c="22C5" xlink:href="#MJX-18-TEX-N-22C5"></use></g><g data-mml-node="mo" transform="translate(556,0)"><use data-c="22C5" xlink:href="#MJX-18-TEX-N-22C5"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '13',
    latex: '\\bar{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.79ex" role="img" focusable="false" viewBox="0 -866.5 500 1233" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.829ex;"><defs><path id="MJX-2-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-2-TEX-N-2013" d="M0 248V285H499V248H0Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-116.5)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-2-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,598)"><use data-c="2013" xlink:href="#MJX-2-TEX-N-2013"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '14',
    latex: '\\tilde{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="2.769ex" role="img" focusable="false" viewBox="0 -862 500 1224" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.819ex;"><defs><path id="MJX-4-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-4-TEX-N-7E" d="M179 251Q164 251 151 245T131 234T111 215L97 227L83 238Q83 239 95 253T121 283T142 304Q165 318 187 318T253 300T320 282Q335 282 348 288T368 299T388 318L402 306L416 295Q375 236 344 222Q330 215 313 215Q292 215 248 233T179 251Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-112)"><g data-mml-node="mtd"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-4-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,556) translate(-250 0)"><use data-c="7E" xlink:href="#MJX-4-TEX-N-7E"></use></g></g></g></g></g></g></g></g></svg>'
  },{
    id: '15',
    latex: '\\overset{\\frown}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.177ex" role="img" focusable="false" viewBox="0 -952 707.1 1404.1" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.023ex;"><defs><path id="MJX-10-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-10-TEX-N-2322" d="M55 141Q55 149 72 174T125 234T209 303T329 360T478 388H526Q649 383 765 319Q814 291 858 250T923 179T944 141Q944 133 938 128T924 122Q914 124 912 125T902 139Q766 328 500 328Q415 328 342 308T225 258T150 199T102 148T84 124Q81 122 75 122Q55 127 55 141Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-202)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-10-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,779.7) scale(0.707)"><use data-c="2322" xlink:href="#MJX-10-TEX-N-2322"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '16',
    latex: '\\overset{\\smile}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.141ex" role="img" focusable="false" viewBox="0 -944.3 707.1 1388.5" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.005ex;"><defs><path id="MJX-11-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-11-TEX-N-2323" d="M923 378Q944 378 944 358Q944 345 912 311T859 259Q710 134 500 134Q288 134 140 259Q55 336 55 358Q55 366 61 372T75 378Q78 378 84 376Q86 376 101 356T147 310T221 257T339 212T500 193Q628 193 734 236Q841 282 903 363Q914 378 923 378Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-194.3)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-11-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,771.2) scale(0.707)"><use data-c="2323" xlink:href="#MJX-11-TEX-N-2323"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '17',
    latex: '\\overset{\\rightarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.8ex" height="3.569ex" role="img" focusable="false" viewBox="0 -1038.7 500 1577.3" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.219ex;"><defs><path id="MJX-13-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-13-TEX-N-2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-288.7)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-13-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,866) translate(-500 0)"><use data-c="2192" xlink:href="#MJX-13-TEX-N-2192"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '18',
    latex: '\\overset{\\leftarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.569ex" role="img" focusable="false" viewBox="0 -1038.7 707.1 1577.3" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.219ex;"><defs><path id="MJX-15-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-15-TEX-N-2190" d="M944 261T944 250T929 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H929Q944 261 944 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-288.7)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-15-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,866) scale(0.707)"><use data-c="2190" xlink:href="#MJX-15-TEX-N-2190"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '19',
    latex: '\\overset{\\leftrightarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.569ex" role="img" focusable="false" viewBox="0 -1038.7 707.1 1577.3" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.219ex;"><defs><path id="MJX-5-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-5-TEX-N-2194" d="M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-288.7)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-5-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,866) scale(0.707)"><use data-c="2194" xlink:href="#MJX-5-TEX-N-2194"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '20',
    latex: '\\overset{\\rightharpoonup}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.201ex" role="img" focusable="false" viewBox="0 -957.3 707.1 1414.7" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.035ex;"><defs><path id="MJX-8-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-8-TEX-N-21C0" d="M691 500Q691 511 711 511Q720 511 723 510T730 504T735 490T746 464T768 425Q796 378 835 339T897 285T933 263Q941 258 942 256T944 245T937 230H70Q56 237 56 250T70 270H852Q802 308 762 364T707 455T691 500Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-207.3)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-8-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,703.4) scale(0.707)"><use data-c="21C0" xlink:href="#MJX-8-TEX-N-21C0"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '21',
    latex: '\\overset{\\leftharpoonup}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.201ex" role="img" focusable="false" viewBox="0 -957.3 707.1 1414.7" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.035ex;"><defs><path id="MJX-9-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-9-TEX-N-21BC" d="M62 230Q56 236 55 244Q55 252 57 255T69 265Q114 292 151 326T208 391T243 448T265 491T273 509Q276 511 288 511Q304 511 306 505Q309 501 303 484Q293 456 279 430T251 383T223 344T196 313T173 291T156 276L148 270H929Q944 261 944 250T929 230H62Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,-207.3)"><g data-mml-node="mtd"><g data-mml-node="mover"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-9-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,703.4) scale(0.707)"><use data-c="21BC" xlink:href="#MJX-9-TEX-N-21BC"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '22',
    latex: '\\underset{\\rightarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.8ex" height="3.298ex" role="img" focusable="false" viewBox="0 -978.9 500 1457.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.083ex;"><defs><path id="MJX-3-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-3-TEX-N-2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,228.9)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-3-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(250,-600) translate(-500 0)"><use data-c="2192" xlink:href="#MJX-3-TEX-N-2192"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '23',
    latex: '\\underset{\\leftarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.298ex" role="img" focusable="false" viewBox="0 -978.9 707.1 1457.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.083ex;"><defs><path id="MJX-5-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-5-TEX-N-2190" d="M944 261T944 250T929 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q121 283 158 314T215 375T247 434T264 480L267 497Q269 503 270 505T275 509T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H929Q944 261 944 250Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,228.9)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-5-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,-600) scale(0.707)"><use data-c="2190" xlink:href="#MJX-5-TEX-N-2190"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '24',
    latex: '\\underset{\\leftrightarrow}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="3.298ex" role="img" focusable="false" viewBox="0 -978.9 707.1 1457.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.083ex;"><defs><path id="MJX-6-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-6-TEX-N-2194" d="M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,228.9)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-6-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,-600) scale(0.707)"><use data-c="2194" xlink:href="#MJX-6-TEX-N-2194"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '25',
    latex: '\\underset{\\rightharpoonup}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="2.913ex" role="img" focusable="false" viewBox="0 -893.7 707.1 1287.4" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.891ex;"><defs><path id="MJX-7-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-7-TEX-N-21C0" d="M691 500Q691 511 711 511Q720 511 723 510T730 504T735 490T746 464T768 425Q796 378 835 339T897 285T933 263Q941 258 942 256T944 245T937 230H70Q56 237 56 250T70 270H852Q802 308 762 364T707 455T691 500Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,143.7)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-7-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,-600) scale(0.707)"><use data-c="21C0" xlink:href="#MJX-7-TEX-N-21C0"></use></g></g></g></g></g></g></g></svg>'
  },{
    id: '26',
    latex: '\\underset{\\leftharpoonup}{2}',
    text: '<svg xmlns="http://www.w3.org/2000/svg" width="1.6ex" height="2.913ex" role="img" focusable="false" viewBox="0 -893.7 707.1 1287.4" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.891ex;"><defs><path id="MJX-8-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-8-TEX-N-21BC" d="M62 230Q56 236 55 244Q55 252 57 255T69 265Q114 292 151 326T208 391T243 448T265 491T273 509Q276 511 288 511Q304 511 306 505Q309 501 303 484Q293 456 279 430T251 383T223 344T196 313T173 291T156 276L148 270H929Q944 261 944 250T929 230H62Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,143.7)"><g data-mml-node="mtd"><g data-mml-node="munder"><g data-mml-node="mn" transform="translate(103.6,0)"><use data-c="32" xlink:href="#MJX-8-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(0,-600) scale(0.707)"><use data-c="21BC" xlink:href="#MJX-8-TEX-N-21BC"></use></g></g></g></g></g></g></g></svg>'
  }
]

// 分隔符号
const splitLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\left(a\\right)',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/1.png" />',
  },{
    id: '2',
    latex: '\\left[a\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/2.png" />'
  },{
    id: '3',
    latex: '\\left\\{a\\right\\}',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/3.png" />'
  },{
    id: '4',
    latex: '\\left\\langle a\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/4.png" />'
  },{
    id: '5',
    latex: '\\left| a\\right|',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/5.png" />'
  },{
    id: '6',
    latex: '\\left| \\left|{a} \\right|\\right|',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/6.png" />'
  },{
    id: '7',
    latex: '\\left[\\left[{a}\\right]\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/7.png" />'
  },{
    id: '8',
    latex: '\\left[ a\\right[',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/8.png" />'
  },{
    id: '9',
    latex: '\\left] a\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/9.png" />'
  },{
    id: '10',
    latex: '\\left] a\\right[',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/10.png" />'
  },{
    id: '11',
    latex: '\\left( a\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/11.png" />'
  },{
    id: '12',
    latex: '\\left[ a\\right)',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/12.png" />'
  },{
    id: '13',
    latex: '\\left\\langle a\\right|',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/13.png" />'
  },{
    id: '14',
    latex: '\\left| a\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/14.png" />'
  },{
    id: '15',
    latex: '\\left( a\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/15.png" />'
  },{
    id: '16',
    latex: '\\left.  a\\right)',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/16.png" />'
  },{
    id: '17',
    latex: '\\left[ a\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/17.png" />'
  },{
    id: '18',
    latex: '\\left.  a\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/18.png" />'
  },{
    id: '19',
    latex: '\\left\\{ a\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/19.png" />'
  },{
    id: '20',
    latex: '\\left.  a\\right\\}',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/20.png" />'
  },{
    id: '21',
    latex: '\\left\\langle a\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/21.png" />'
  },{
    id: '22',
    latex: '\\left.  a\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/22.png" />'
  },{
    id: '23',
    latex: '\\left| a\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/23.png" />'
  },{
    id: '24',
    latex: '\\left.  a\\right|',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/24.png" />'
  },{
    id: '25',
    latex: '\\left| \\left|{a}\\right.\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/25.png" />'
  },{
    id: '26',
    latex: '\\left.\\left.{a}\\right|\\right|',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/26.png" />'
  },{
    id: '27',
    latex: '\\left[\\left[{a}\\right.\\right.',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/27.png" />'
  },{
    id: '28',
    latex: '\\left.\\left.{a}\\right]\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/28.png" />'
  },{
    id: '29',
    latex: '\\left\\langle a|b\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/29.png" />'
  },{
    id: '29',
    latex: '\\left\\langle a|b\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/29.png" />'
  },{
    id: '30',
    latex: '\\overbrace{a}^{{b}}',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/30.png" />'
  },
  {
    id: '31',
    latex: '\\underbrace{a}_{{b}}',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/31.png" />'
  },
  {
    id: '32',
    latex: '\\left( a|b\\right)',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/32.png" />'
  },
  {
    id: '33',
    latex: '\\left[ a|b\\right]',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/33.png" />'
  },
  {
    id: '34',
    latex: '\\left\\langle a|b\\right\\rangle',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/34.png" />'
  },
  {
    id: '35',
    latex: '\\left\\{ a|b\\right\\}',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/35.png" />'
  },
  {
    id: '36',
    latex: '\\left\\{ \\begin{array}{l} {a}\\\\{b} \\end{array}\\right. ',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/36.png" />'
  },
  {
    id: '37',
    latex: '\\left\\{ \\begin{array}{l} {a}\\\\{b}\\\\{c} \\end{array}\\right. ',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/37.png" />'
  },
  {
    id: '38',
    latex: '\\left( \\begin{matrix}a\\\\b\\end{matrix}\\right)',
    text: '<img style="width:100%" src="http://localhost:5173/src/assets/img/split/38.png" />'
  }
]

// 分数根号
const percentLatex: DataItem[] = [
  {
    id:'1',
    latex: '\\dfrac{b}{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/1.png" />'
  },{
    id:'1-1',
    latex: '\\tfrac{b}{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/2.png" />'
  },{
    id:'2',
    latex: '\\ ^{b}/_{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/3.png" />'
  },{
    id:'3',
    latex: '\\ b/a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/4.png" />'
  },{
    id:'4',
    latex: '\\sqrt{2}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/5.png" />'
  },{
    id:'5',
    latex: '\\sqrt[2]{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/6.png" />'
  },{
    id:'6',
    latex: '\\overline{\\left){a}\\right.}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/7.png" />'
  },{
    id:'7',
    latex: '\\overset{b}{\\overline{\\left){a}\\right.}}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/percent/8.png" />'
  },
]

// 上下标
const updownLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\left.  X\\right. ^{2}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/1.png" />'
  },{
    id: '2',
    latex: '\\left.  X\\right. _{2}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/2.png" />'
  },{
    id: '3',
    latex: '\\left.  X\\right. _{2}^{1}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/3.png" />'
  },{
    id: '4',
    latex: '\\overset{1}{X}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/4.png" />'
  },{
    id: '5',
    latex: '\\underset{1}{X}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/5.png" />'
  },{
    id: '6',
    latex: '\\underset{1}{\\overset{1}{X}}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/6.png" />'
  },{
    id: '7',
    latex: '\\ ^{1}X',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/7.png" />'
  },{
    id: '8',
    latex: '\\ _{1}X',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/8.png" />'
  },{
    id: '9',
    latex: '\\ _{2}^{1}X',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/updown/9.png" />'
  },
]

// 求和符号
const qhLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\sum a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/qh/1.png" />'
  },{
    id: '2',
    latex: '\\sum_{a}{b}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/qh/2.png" />'
  },{
    id: '3',
    latex: '\\sum_{2}^{1}{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/qh/3.png" />'
  }
]

// 集合符号
const jhLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\prod a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/1.png" />'
  },{
    id: '2',
    latex: '\\prod_{2}a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/2.png" />'
  },{
    id: '3',
    latex: '\\prod_{2}^{1}a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/3.png" />'
  },{
    id: '4',
    latex: '\\coprod a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/4.png" />'
  },{
    id: '5',
    latex: '\\coprod_{2}a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/5.png" />'
  },{
    id: '6',
    latex: '\\coprod_{2}^{1}a',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/6.png" />'
  },{
    id: '7',
    latex: '\\bigcap2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/7.png" />'
  },{
    id: '8',
    latex: '\\bigcap_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/8.png" />'
  },{
    id: '9',
    latex: '\\bigcap_{2}^{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/9.png" />'
  },{
    id: '10',
    latex: '\\bigcup2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/10.png" />'
  },{
    id: '11',
    latex: '\\bigcup_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/11.png" />'
  },{
    id: '12',
    latex: '\\bigcup_{2}^{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jh/12.png" />'
  }
]


// 积分符号
const jfLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\int2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/1.png" />'
  },{
    id: '2',
    latex: '\\int_{2}^{1}3',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/2.png" />'
  },{
    id: '3',
    latex: '\\int_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/3.png" />'
  },{
    id: '4',
    latex: '\\iint2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/4.png" />'
  },{
    id: '5',
    latex: '\\iint_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/5.png" />'
  },{
    id: '6',
    latex: '\\iiint2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/6.png" />'
  },{
    id: '7',
    latex: '\\iiint_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/7.png" />'
  },{
    id: '8',
    latex: '\\oint2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/8.png" />'
  },{
    id: '9',
    latex: '\\oint_{1}2',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jf/9.png" />'
  }
]

// 标签箭头符号
const bqLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\xrightarrow{n}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/1.png" />'
  },{
    id: '2',
    latex: '\\xrightarrow[n]{} ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/2.png" />'
  },{
    id: '3',
    latex: '\\xrightarrow[m]{n}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/3.png" />'
  },{
    id: '4',
    latex: '\\xleftarrow[]{n}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/4.png" />'
  },{
    id: '5',
    latex: '\\xleftarrow[n]{}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/5.png" />'
  },{
    id: '6',
    latex: '\\xleftarrow[m]{n}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/6.png" />'
  },{
    id: '7',
    latex: '\\overset{n}{\\longleftrightarrow}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/7.png" />'
  },{
    id: '8',
    latex: '\\underset{n}{\\longleftrightarrow}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/8.png" />'
  },{
    id: '9',
    latex: '\\underset{m}{\\overset{n}{\\longleftrightarrow}}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/9.png" />'
  },{
    id: '10',
    latex: '\\overset{n}{\\rightleftarrows}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/10.png" />'
  },{
    id: '11',
    latex: '\\underset{n}{\\rightleftarrows}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/11.png" />'
  },{
    id: '12',
    latex: '\\underset{m}{\\overset{n}{\\rightleftarrows}}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/12.png" />'
  },{
    id: '13',
    latex: '\\overset{n}{\\rightleftharpoons}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/13.png" />'
  },{
    id: '14',
    latex: '\\underset{n}{\\rightleftharpoons}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/14.png" />'
  },{
    id: '15',
    latex: '\\underset{m}{\\overset{n}{\\rightleftharpoons}}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/bqjt/15.png" />'
  }
]

// 矩形模板符号
const jxLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\begin{array}{l} {1}&{2} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/1.png" />'
  },{
    id: '2',
    latex: '\\begin{array}{l} {1}\\\\{2} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/2.png" />'
  },{
    id: '3',
    latex: '\\begin{array}{l} {1}&{2}\\\\{3}&{4} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/3.png" />'
  },{
    id: '4',
    latex: '\\begin{array}{l} {1}&{2}&{3} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/4.png" />'
  },{
    id: '5',
    latex: '\\begin{array}{l} {1}\\\\{2}\\\\{3} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/5.png" />'
  },{
    id: '6',
    latex: '\\begin{array}{l} {1}&{2}&{3}\\\\{4}&{5}&{6}\\\\{7}&{8}&{9} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/6.png" />'
  },{
    id: '7',
    latex: '\\begin{array}{l} {1}&{2}&{3}&{4} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/7.png" />'
  },{
    id: '8',
    latex: '\\begin{array}{l} {1}\\\\{2}\\\\{3}\\\\{4} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/8.png" />'
  },{
    id: '9',
    latex: '\\begin{array}{l} {1}&{2}&{3}&{4}\\\\{5}&{6}&{7}&{8}\\\\{9}&{10}&{11}&{12}\\\\{13}&{14}&{15}&{16} \\end{array}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/jx/9.png" />'
  }
]

// 底线顶线符号
const dxLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\left|{\\overline{a}}\\right.',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/dx/1.png" />'
  },{
    id: '2',
    latex: '\\left.{\\overline {a}}\\right|',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/dx/2.png" />'
  },{
    id: '3',
    latex: '\\left|{\\underline {a}} \\right.',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/dx/3.png" />'
  },{
    id: '4',
    latex: '\\left. {\\underline {a}} \\right|',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/dx/4.png" />'
  },{
    id: '5',
    latex: '\\boxed{a}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/dx/5.png" />'
  }
]

// 希腊大写
const xldLatex:DataItem[] = [
  {
    id: '1',
    latex: 'A',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/1.png" />'
  },{
    id: '2',
    latex: 'B',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/2.png" />'
  },{
    id: '3',
    latex: 'X',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/3.png" />'
  },{
    id: '4',
    latex: '\\Delta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/4.png" />'
  },{
    id: '5',
    latex: 'E',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/5.png" />'
  },{
    id: '6',
    latex: '\\Phi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/6.png" />'
  },{
    id: '7',
    latex: '\\Gamma',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/7.png" />'
  },{
    id: '8',
    latex: 'H',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/8.png" />'
  },{
    id: '9',
    latex: 'I',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/9.png" />'
  },{
    id: '10',
    latex: 'K',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/10.png" />'
  },{
    id: '11',
    latex: '\\Lambda',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/11.png" />'
  },{
    id: '12',
    latex: 'M',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/12.png" />'
  },{
    id: '13',
    latex: 'N',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/13.png" />'
  },{
    id: '14',
    latex: 'O',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/14.png" />'
  },{
    id: '15',
    latex: '\\Pi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/15.png" />'
  },{
    id: '16',
    latex: '\\Theta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/16.png" />'
  },{
    id: '17',
    latex: 'P',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/17.png" />'
  },{
    id: '18',
    latex: 'Σ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/18.png" />'
  },{
    id: '19',
    latex: 'T',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/19.png" />'
  },{
    id: '20',
    latex: 'Y',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/20.png" />'
  },{
    id: '21',
    latex: '\\Omega',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/21.png" />'
  },{
    id: '22',
    latex: '\\Xi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/22.png" />'
  },{
    id: '23',
    latex: '\\Psi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/23.png" />'
  },{
    id: '24',
    latex: 'Z',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xld/24.png" />'
  }
]
// 希腊小写
const xlxLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\alpha',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/1.png" />'
  },{
    id: '2',
    latex: '\\beta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/2.png" />'
  },{
    id: '3',
    latex: '\\chi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/3.png" />'
  },{
    id: '4',
    latex: '\\delta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/4.png" />'
  },{
    id: '5',
    latex: '\\varepsilon',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/5.png" />'
  },{
    id: '6',
    latex: '\\phi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/6.png" />'
  },{
    id: '7',
    latex: '\\varphi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/7.png" />'
  },{
    id: '8',
    latex: '\\gamma',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/8.png" />'
  },{
    id: '9',
    latex: '\\eta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/9.png" />'
  },{
    id: '10',
    latex: '\\iota',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/10.png" />'
  },{
    id: '11',
    latex: '\\kappa',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/11.png" />'
  },{
    id: '12',
    latex: '\\lambda',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/12.png" />'
  },{
    id: '13',
    latex: '\\mu',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/13.png" />'
  },{
    id: '14',
    latex: '\\nu',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/14.png" />'
  },{
    id: '15',
    latex: '\\omicron',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/15.png" />'
  },{
    id: '16',
    latex: '\\pi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/16.png" />'
  },{
    id: '17',
    latex: '\\varpi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/17.png" />'
  },{
    id: '18',
    latex: '\\theta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/18.png" />'
  },{
    id: '19',
    latex: '\\vartheta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/19.png" />'
  },{
    id: '20',
    latex: '\\rho',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/20.png" />'
  },{
    id: '21',
    latex: '\\sigma',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/21.png" />'
  },{
    id: '22',
    latex: '\\varsigma',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/22.png" />'
  },{
    id: '23',
    latex: '\\tau',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/23.png" />'
  },{
    id: '24',
    latex: '\\upsilon',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/24.png" />'
  },{
    id: '25',
    latex: '\\omega',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/25.png" />'
  },{
    id: '26',
    latex: '\\xi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/26.png" />'
  },{
    id: '27',
    latex: '\\psi',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/27.png" />'
  },{
    id: '28',
    latex: '\\zeta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/xlx/28.png" />'
  }
]

// 其他符号
const otherLatex:DataItem[] = [
  {
    id: '1',
    latex: '\\partial',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/1.png" />'
  },{
    id: '2',
    latex: '\\wp',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/2.png" />'
  },{
    id: '3',
    latex: '\\Im',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/3.png" />'
  },{
    id: '4',
    latex: '\\Re',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/4.png" />'
  },{
    id: '5',
    latex: '\\aleph',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/5.png" />'
  },{
    id: '6',
    latex: 'ℝ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/6.png" />'
  },{
    id: '7',
    latex: 'ℤ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/7.png" />'
  },{
    id: '8',
    latex: 'ℂ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/8.png" />'
  },{
    id: '9',
    latex: 'ℚ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/9.png" />'
  },{
    id: '10',
    latex: 'ℕ',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/10.png" />'
  },{
    id: '11',
    latex: '\\infty',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/11.png" />'
  },{
    id: '12',
    latex: '\\hbar',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/12.png" />'
  },{
    id: '13',
    latex: '\\ell',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/13.png" />'
  },{
    id: '14',
    latex: '\\dagger',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/14.png" />'
  },{
    id: '15',
    latex: '\\Delta',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/15.png" />'
  },{
    id: '16',
    latex: '\\nabla',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/16.png" />'
  },{
    id: '17',
    latex: '\\Omega',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/17.png" />'
  },{
    id: '18',
    latex: '℧',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/18.png" />'
  },{
    id: '19',
    latex: '◊',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/19.png" />'
  },{
    id: '20',
    latex: '\\sum',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/20.png" />'
  },{
    id: '21',
    latex: '\\prod',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/21.png" />'
  },{
    id: '22',
    latex: '\\coprod',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/22.png" />'
  },{
    id: '23',
    latex: '\\int',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/23.png" />'
  },{
    id: '24',
    latex: '^{\\circ}',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/24.png" />'
  },{
    id: '25',
    latex: '\\angle',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/25.png" />'
  },{
    id: '26',
    latex: '∡',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/26.png" />'
  },{
    id: '27',
    latex: '∢',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/27.png" />'
  },{
    id: '28',
    latex: '\\bot',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/28.png" />'
  },{
    id: '29',
    latex: '//',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/29.png" />'
  },{
    id: '30',
    latex: '\\triangle',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/30.png" />'
  },{
    id: '31',
    latex: '\\bigcirc',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/31.png" />'
  },{
    id: '32',
    latex: '\\square',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/32.png" />'
  },{
    id: '33',
    latex: '\\bigstar',
    text:'<img style="width:100%" src="http://localhost:5173/src/assets/img/other/33.png" />'
  }
]

const list: IListItem[] = [
  {
    id: 1,
    column: 6,
    title: '基础运算符',
    data: baseLatex
  },
  {
    id: 2,
    column: 6,
    title: '关系符',
    data: relativeLatex
  },
  {
    id: 3,
    column: 6,
    title: '箭头符',
    data: arrowLatex
  },
  {
    id: 4,
    column: 6,
    title: '修饰符',
    data: modifierLatex
  },
  {
    id: 5,
    column: 6,
    title: '分隔符',
    data: splitLatex
  },
  {
    id: 6,
    column: 6,
    title: '分数根号',
    data: percentLatex
  },
  {
    id: 7,
    column: 6,
    title: '上下标',
    data: updownLatex
  },
  {
    id: 8,
    column: 6,
    title: '求和符号',
    data: qhLatex
  },
  {
    id: 9,
    column: 6,
    title: '集合符号',
    data: jhLatex
  },
  {
    id: 10,
    column: 6,
    title: '积分符号',
    data: jfLatex
  },
  {
    id: 11,
    column: 6,
    title: '标签箭头符号',
    data: bqLatex
  },
  {
    id: 12,
    column: 6,
    title: '矩形模板符号',
    data: jxLatex
  },
  {
    id: 13,
    column: 6,
    title: '底线顶线符号',
    data: dxLatex
  },
  {
    id: 14,
    column: 6,
    title: '希腊大写',
    data: xldLatex
  },
  {
    id: 15,
    column: 6,
    title: '希腊小写',
    data: xlxLatex
  },
  {
    id: 16,
    column: 6,
    title: '其他符号',
    data: otherLatex
  }
]

export default list
