const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);


const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);


class Demo extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
    <div class="dp-Template">
      <div class="dp-TemplateLeftCol">
        <ul class="dp-ModuleNav">
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconEmail" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconChat" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconAvatar" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconLike" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconAi" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconApprov" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconTrello" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconSetting" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconMoney is-borderBottom" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconIntegration" href="#"></a></li>
        </ul>
      </div>
      <div class="dp-TemplateMainColl">
        <div class="dp-TopActionRow">
          <div class="dp-TopActionRowLeft">
            <div class="dp-Search">
              <form>
                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                  <input type="text" placeholder="Search ..."></input>
              </form>
              <div class="dp-IconSection">
                  <ul class="dp-IconPanelList">
                      <li class="dp-MenuBarItem"><span class="dp-Icon dp-iconClockGray"></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-red">3</span><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-red">1</span><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconPlus"></span></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="dp-TopActionRowRight">
            <div class="dp-ControlPanel">
              <div class="dp-IconSection">
                <ul class="dp-IconPanelList">
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconBell"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconPhoneGreen"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconChatGreen"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-Avatar"><img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img></span><span class="dp-Arrow"></span></li>
                    <li class="dp-MenuBarItem dp-DropMenuJs"><span class="dp-Icon dp-IconPlane dp-ActionDropDown"></span><span class="dp-Arrow"></span>

                      <div class="dp-YourAccount">
                        <div class="dp-AccountWrap">
                          <ul class="dp-AccountList">
                            <li class="dp-AccountItem dp-AccountTitle">Your account</li>
                            <li class="dp-AccountItem is-active">
                              <span class="dp-Icon-Title dp-raven">
                                <span class="dp-Icon dp-IconPlane"></span>Raven Paper
                              </span>
                              <span class="dp-Icon dp-IconTick"></span>
                            </li>
                            <li class="dp-AccountItem">
                              <span class="dp-Icon-Title dp-raven">
                                <span class="dp-Icon dp-IconPlaneOrange"></span>
                                Raven Paper Crafts
                              </span>
                            </li>
                            <li class="dp-AccountItem">
                              <span class="dp-Icon-Title dp-raven">
                                <span class="dp-Icon dp-IconPlaneViolet"></span>
                                <span>
                                  RP Europe (Demo)
                                  <span class="dp-BuyNow">12 days left | Buy now</span>
                                </span>
                              </span>
                            </li>
                            <li class="dp-AccountItem">
                              <span class="dp-Icon-Title">
                                <span class="dp-Icon dp-IconPlusAdd"></span>
                                Add new
                              </span>
                            </li>
                            <li class="dp-AccountItem">
                              <span class="dp-Icon-Title">
                                <span class="dp-Icon dp-IconNoteGray"></span>
                                Knowledgebase article
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="dp-TemplateMainContent">
          <div class="dp-TemplateMainContentLeft">

            <div class="dp-Tickets">
              <div class="dp-dropdownContainer">
                <div class="dp-Title is-active">
                  <div class="dp-TitleName dp-DropMenuJs">
                    <span class="dp-Icon dp-iconTickets"></span>
                    All tickets <span class="dp-qt">(90)</span>
                    <span class="dp-Icon dp-iconArrowDown"></span>
                  </div>
                  <div class="dp-TicketsThumb">
                    <span class="dp-Icon dp-iconTickets4 is-active"></span>
                    <span class="dp-Icon dp-iconTickets2"></span>
                    <span class="dp-Icon dp-iconTickets3"></span>
                  </div>
                </div>
              </div>
            </div>

            <ul class="dp-TicketMenu is-active">
              <li class="dp-TicketMenuItem dp-MenuBarItem is-active">
                <span class="dp-TitleMenu">
                  <span>Awaiting agent</span>
                  <span class="dp-Arrow"></span>
                </span>
                <ul class="dp-SubMenu">
                  <li><a href="#"><span>My tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">1</span></a></li>
                  <li><a href="#"><span>Tickets I follow<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span></a></li>
                  <li><a href="#"><span>Unassigned tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span></a></li>
                  <li><a href="#"><span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span></a></li>
                </ul>
              </li>
              <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Filters</span><span class="dp-Arrow"></span></span></li>
              <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Saved Searches</span><span class="dp-Arrow"></span></span></li>
              <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Problems & incidents (2)</span><span class="dp-Arrow"></span></span></li>
              <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Labels</span><span class="dp-Arrow"></span></span></li>
              <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>My stars (3)</span><span class="dp-Arrow"></span></span></li>
            </ul>


            <ul class="dp-FilterControlsList">
              <li class="dp-FilterControlsItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                  <input type="checkbox" class="dp-ControlInput" id="customCheckbox13"></input>
                  <label for="customCheckbox13"></label>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-ItemRow">
                  <span class="dp-Title">Order By</span>
                </span>
                <span class="dp-ItemRow">
                  <select class="dp-Select">
                    <option>Department & Urgency</option>
                    <option>Department & Urgency 2</option>
                    <option>Department & Urgency 3</option>
                  </select>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-ItemRow">
                  <span class="dp-Title">FACETING BY</span>
                </span>
                <span class="dp-ItemRow">
                  <select class="dp-Select">
                    <option>2 Agents, 2 Departments</option>
                    <option>3 Agents, 3 Departments</option>
                    <option>4 Agents, 4 Departments</option>
                  </select>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-Icon dp-iconEye"></span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-Icon dp-iconSetting"></span>
              </li>
            </ul>
            <form class="">
              <ul class="dp-FilterResultList">
                  
                  <li class="dp-FilterResultTitle">
                      <span>Sales</span>
                  </li>
                  <li class="dp-FilterResultItem is-active">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox1"></input>
                              <label for="customCheckbox1">SSO Information</label>
                              <span class="dp-Icon dp-iconStar"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconRocket"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--red">10</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Kenneth James  <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">kenneth@windfarms.loremipsum</span>&gt;</span>Windfarms Windfarms Windfarms Windfarms Windfarms Windfarms Windfarms Windfarms Windfarms</span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>12 hr 30 min</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox2"></input>
                              <label for="customCheckbox2">Portal disabled landing message</label>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconBug"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Circle dp-iconClock"></span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Toby Falkirk <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">t.falkirk@rambler.com</span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span class="dp-Tag Tag--small Tag--pink">Failed</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox3"></input>
                              <label for="customCheckbox3">Inventory component</label>
                              <span class="dp-Icon dp-iconStarGreen"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconRocket"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--redLight">9</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Mark Jarvis <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">mjarvis@econorob.nl </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox4"></input>
                              <label for="customCheckbox4">Allow anyone to email support</label>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconUserAvatar"></span>
                              <span class="dp-Badge Badge--redMin"></span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Kenneth James <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">kenneth@windfarms.com </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>2 hr 16 min</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox5"></input>
                              <label for="customCheckbox5">AW: Need some help?</label>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconLock"></span>
                              <span class="dp-Circle dp-iconMln"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--redLight">9</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Toby Falkirk <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">t.falkirk@rambling.com </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>12 hr 43 min</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox6"></input>
                              <label for="customCheckbox6">SSO working well with Safari and IE Lorem ipsum</label>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconMln"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--orangeLight">7</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Mark Jarvis <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">mjarvis@econorob.nl </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span class="dp-Tag Tag--small Tag--orange">10.5 hours</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox7"></input>
                              <label for="customCheckbox7">Enjoying your helpdesk?</label>
                              <span class="dp-Icon dp-iconStar"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconMln"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--yellowMin"></span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Kenneth James <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">kenneth@windfarms.com </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>43 min</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox8"></input>
                              <label for="customCheckbox8">Product enquiry</label>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconMln"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--yellow">6</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Vijay Singh <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">singh.v@leafywifi.com </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>3 days</span>
                          </span>
                      </span>
                  </li>
                  <li class="dp-FilterResultTitle">
                      <span>Support</span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox9"></input>
                              <label for="customCheckbox9">Inventory component</label>
                              <span class="dp-Icon dp-iconStarGreen"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconRocket"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--redLight">9</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Mark Jarvis <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">mjarvis@econorob.nl </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>12 hr 43 min</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow dp-JustifyStart">
                          <span class="dp-UserVal">Department: <span class="dp-ItemValue">Support</span></span>
                          <span class="dp-UserVal">Language: <span class="dp-ItemValue">Italiano</span></span>
                          <span class="dp-UserVal">Last reply: <span class="dp-ItemValue">9 weeks ago</span></span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox10"></input>
                              <label for="customCheckbox10">Enjoying your helpdesk?</label>
                              <span class="dp-Icon dp-iconStar"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconMln"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--yellow">6</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Kenneth James <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">kenneth@windfarms.com </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>4 weeks</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow dp-JustifyStart">
                          <span class="dp-UserVal">Department: <span class="dp-ItemValue">Sales</span></span>
                          <span class="dp-UserVal">Language: <span class="dp-ItemValue">English (US)</span></span>
                          <span class="dp-UserVal">Last reply: <span class="dp-ItemValue">5 months ago</span></span>
                      </span>
                  </li>
                  <li class="dp-FilterResultItem">
                      <span class="dp-ItemRow">
                          <span class="dp-CustomCheckbox">
                              <input type="checkbox" class="dp-ControlInput" id="customCheckbox11"></input>
                              <label for="customCheckbox11">Inventory component</label>
                              <span class="dp-Icon dp-iconStarGreen"></span>
                          </span>
                          <span class="dp-IconGroup">
                              <span class="dp-Circle dp-iconRocket"></span>
                              <span class="dp-Badge Badge--empty"></span>
                              <span class="dp-Badge Badge--redLight">9</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow">
                          <span class="dp-UserInfo">
                              <span class="dp-Icon dp-iconUserAvatar"></span>
                              <span class="dp-UserName">Mark Jarvis <span class="dp-UserEmail">&lt;<span class="dp-UserEmailItem">mjarvis@econorob.nl </span>&gt; </span> </span>
                          </span>
                          <span class="dp-TimeStatus">
                              <span>4 weeks</span>
                          </span>
                      </span>
                      <span class="dp-ItemRow dp-JustifyStart">
                          <span class="dp-Tag Tag--disabled">Custom work</span>
                          <span class="dp-Tag Tag--disabled">Report back on bug fix</span>
                          <span class="dp-Tag Tag--purple">VIP</span>
                      </span>
                      <span class="dp-ItemRow dp-JustifyStart">
                          <span class="dp-UserVal">Department: <span class="dp-ItemValue">Support</span></span>
                          <span class="dp-UserVal">Language: <span class="dp-ItemValue">Italiano</span></span>
                          <span class="dp-UserVal">Last reply: <span class="dp-ItemValue">9 weeks ago</span></span>
                      </span>
                  </li>
              </ul>
            </form>
          </div>
          <div class="dp-TemplateMainContentRight">
            <ul class="dp-TabBarList">
              <li class="dp-AddTabButton">
                <a class="dp-Icon dp-iconAdd" href="#"></a>
              </li>
              <li class="dp-TabBarItem">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconEmail" href="#"></a>
                  <span class="dp-Title">RE: Need some help?</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Icon dp-Avatar">
                    <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                  </span>
                  <span class="dp-Subtitle">James Colbert</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
              <li class="dp-TabBarItem is-active">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconEmail" href="#"></a>
                  <span class="dp-Title">SSO working well wit...</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Icon dp-Avatar">
                    <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                  </span>
                   <span class="dp-Subtitle">Zack Prudent</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
              <li class="dp-TabBarItem">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconOrganisation" href="#"></a>
                  <span class="dp-Title">Deskpro</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Subtitle">Organisation</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
            </ul>
            <div class="dp-Sso">
              <div class="dp-SsoWrap">
                  <span class="dp-Icon dp-IconStar"></span>
                  <span class="dp-Tag">#14355</span>
                  <span class="dp-SsoTxt">SSO working well with Safari and IE but issue with Chrome browser</span>
              </div>
            </div>

            <div class="dp-TemplateMainBarContainer">
              <button class="dp-ActionButton is-active dp-DropMenuJs" type="button">
                <span class="dp-Icon dp-iconRocketBlue"></span>
                <span class="dp-Icon dp-iconRocketwhite"></span>
                ACTIONS
              </button>

              <ul class="dp-ContextMenu is-active">
                <li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-iconLockGray"></span> Lock (permission required)</a></li>
                <li><a href="#"><span class="dp-MenuIcon dp-iconGrayMin"></span> Put ticket on hold</a></li>
                <li class="dp-disabledItem"><a href="#">  <span class="dp-MenuIcon dp-IconDelete"></span>   Delete (permission required)</a></li>
                <li class="dp-DropdownDivider"></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconSplit"></span>  Split message to new ticket</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconMerge"></span>  Merge</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-iconEmail"></span>  Create linked ticket</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconLink"></span>  Link existing ticket</a></li>
                <li class="dp-DropdownDivider"></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconArticle"></span>  Create new pending article</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconSnippet"></span>  Create new snippet</a></li>
                <li class="dp-DropdownDivider"></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconPrint"></span>  Print</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconDownloadPDF"></span>  Download PDF</a></li>
                <li><a href="#"><span class="dp-MenuIcon dp-iconBugGray"></span>Download Debug File</a></li>
                <li class="dp-DropdownDivider"></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconSpam"></span>  Spam</a></li>
                <li><a href="#"> <span class="dp-MenuIcon dp-IconBan"></span>  Ban</a></li>
              </ul>

              <div class="dp-TagBar">
                <span class="dp-Tag Tag--close">Custom work<span class="dp-iconClose"></span></span>
                <span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-iconClose"></span></span>
                <span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-iconClose"></span></span>
                <span class="dp-Tag dp-TagPlus"></span>
              </div>
            </div>

            <ul class="dp-MenuBarList">
              <li class="dp-MenuBarItem dp-purpleColor dp-DropMenuJs">
                  <span class="dp-Icon dp-iconCharger">
                      <span class="dp-Badge dp-red">10</span>
                  </span>
                  <span class="dp-Title">Tasks<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem dp-redLightColor">
                  <span class="dp-Icon dp-iconNote"></span>
                  <span class="dp-Title">Billing<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem dp-greenColor">
                  <span class="dp-Icon dp-iconNoteGreen"></span>
                  <span class="dp-Title">License<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem">
                  <span class="dp-Icon dp-iconClock2"></span>
                  <span class="dp-Title">Follow-ups<span class="dp-Arrow"></span></span>
              </li>

              <div class="dp-Tasks">
                <div class="dp-TasksWrap">
                  <form>
                      <div class="dp-Actions">
                      <div class="dp-TaskEditor">
                        <textarea name="comment" placeholder="Task description"></textarea>
                          <ul class="dp-ActionsItems">
                              <li class="dp-ActionsItem dp-MenuBarItem">No due date<span class="dp-Arrow"></span></li>
                              <li class="dp-ActionsItem dp-MenuBarItem">Private<span class="dp-Arrow"></span></li>
                              <li class="dp-ActionsItem dp-MenuBarItem">Me<span class="dp-Arrow"></span></li>
                              <li class="dp-ActionsItem"><span class="dp-Tag Tag--small Tag--green">Add</span></li>
                          </ul>
                      </div>
                      </div>
                      <ul class="dp-FilterResultList">
                          <li class="dp-FilterResultItem">
                              <span class="dp-ItemRow">
                                  <span class="dp-CustomCheckbox">
                                      <input type="checkbox" class="dp-ControlInput" id="checkboxTask"></input>
                                      <label for="checkboxTask">Task item description</label>
                                  </span>
                              </span>
                              <span class="dp-ItemRow">
                              <ul class="dp-ActionsItems">
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>30/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>14:30 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
                              </ul>
                                  <span class="dp-TimeStatus">
                                      <span class="dp-Tag Tag--small Tag--pink">Remove</span>
                                  </span>
                              </span>
                          </li>
                          <li class="dp-FilterResultItem">
                              <span class="dp-ItemRow">
                                  <span class="dp-CustomCheckbox">
                                      <input type="checkbox" class="dp-ControlInput" id="checkboxTask2"></input>
                                      <label for="checkboxTask2">Task item description</label>
                                  </span>
                              </span>
                              <span class="dp-ItemRow">
                              <ul class="dp-ActionsItems">
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>29/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>11:30 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Marketing<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
                              </ul>
                                  <span class="dp-TimeStatus">
                                      <span class="dp-Tag Tag--small Tag--pink">Remove</span>
                                  </span>
                              </span>
                          </li>
                          <li class="dp-FilterResultItem">
                              <span class="dp-ItemRow">
                                  <span class="dp-CustomCheckbox">
                                      <input type="checkbox" class="dp-ControlInput" id="checkboxTask3"></input>
                                      <label for="checkboxTask3">Task item description</label>
                                  </span>
                              </span>
                              <span class="dp-ItemRow">
                              <ul class="dp-ActionsItems">
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>22/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>16:00 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Sales<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
                              </ul>
                                  <span class="dp-TimeStatus">
                                      <span class="dp-Tag Tag--small Tag--pink">Remove</span>
                                  </span>
                              </span>
                          </li>
                          <li class="dp-FilterResultItem">
                              <span class="dp-ItemRow">
                                  <span class="dp-CustomCheckbox">
                                      <input type="checkbox" class="dp-ControlInput" id="checkboxTask4"></input>
                                      <label for="checkboxTask4">Task item description</label>
                                  </span>
                              </span>
                              <span class="dp-ItemRow">
                              <ul class="dp-ActionsItems">
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>19/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>10:30 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
                              </ul>
                                  <span class="dp-TimeStatus">
                                      <span class="dp-Tag Tag--small Tag--pink">Remove</span>
                                  </span>
                              </span>
                          </li>
                      </ul>
                  </form>
                </div>
              </div>
            </ul>

            <div class="dp-TemplateInnerContent">
              <div class="dp-TemplateInnerContentLeft">
                <div class="dp-PageSidebar">
                  <div class="dp-PageWrapper">
                    <div class="dp-SidebarTabs">
                      <ul class="dp-SidebarTabsList">
                          <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconSettingBlue"></a></li>
                          <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-iconUserBlue"></a></li>
                          <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconBuildingBlue"></a></li>
                      </ul>
                    </div>
                    <div class="dp-SidebarWrapper">
                      <div class="dp-SidebarRow">
                        <div class="dp-SidebarSection">
                            <div class="dp-SectionTitle">Organization & user</div>
                            <span class="dp-LineTitle"></span>
                        </div>
                        <div class="dp-SectionBody-item">
                            <div class="dp-title-item dp-optical">
                                <div class="dp-UserAvatarName">
                                    <span class="dp-Badge Badge--empty"></span>
                                    Optical
                                </div>
                            </div>
                        </div>
                        <div class="dp-SectionBody-item">
                            <p class="dp-title-item">
                                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                                Zack Prudent
                            </p>
                            <p class="dp-Email"><a href="mailto:zack.prudent@techcompany.com">zack.prudent@techcompany.com</a></p>
                            <p class="dp-Phone">
                                <i class="dp-Icon dp-iconPhoneBlue"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                            </p>
                            <p class="dp-OpenResolved">
                                <span class="dp-open"><i class="dp-Icon dp-iconEmailBlue"></i> Open: 7</span>
                                <span class="dp-resolved"><i class="dp-Icon dp-iconEmail"></i> Resolved: 24</span>
                            </p>
                        </div>
                        <div class="dp-OrganizationSubtitle"><div>CC's <a href="#" class="dp-NumLink">(2)</a></div>  <a href="#" class="dp-BorderLeft">+Add</a></div>
                        <div class="dp-SectionBody-item">
                            <div class="dp-title-item dp-optical dp-CCs">
                                <div class="dp-UserAvatarName">
                                    <span class="dp-Badge Badge--empty"></span>
                                    <span class="dp-UserName">Wendy Pride</span><a href="mailto:w.pride@techcompany.com">w.pride@techco...</a>
                                </div>
                                <a href="#" class="dp-Icon dp-iconVDots"></a>
                            </div>
                        </div>
                        <div class="dp-SectionBody-item db-m-0">
                            <div class="dp-title-item dp-optical dp-CCs">
                                <div class="dp-UserAvatarName">
                                    <span class="dp-Badge Badge--empty"></span>
                                    <span class="dp-UserName">Bob Cooper</span><a href="mailto:bob.cooper@techcompany.com">bob.cooper@tec ...</a>
                                </div>
                                <i class="dp-Icon dp-iconVDots"></i>
                            </div>
                        </div>
                        <div class="dp-SidebarSection dp-SectionControls">
                            <div class="dp-SectionTitle">
                                <div class="dp-TitleControls">Ticket properties</div>
                                <span class="dp-LineTitle"></span>
                                <a href="#" class="dp-Controls">
                                    <span class="dp-qt"> +5 </span> 
                                    <i class="dp-Icon dp-DotsIcon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="dp-PropertyList">
                            <dl class="dp-TicketList">
                                <dt class="dp-TitleList db-m-0">Department</dt>
                                <dd class="dp-SubTitleList"><i class="dp-Icon dp-SupportIcon"></i>Support</dd>

                                <dt class="dp-TitleList">Product</dt>
                                <dd class="dp-SubTitleList">Deskpro Cloud</dd>

                                <dt class="dp-TitleList">Language</dt>
                                <dd class="dp-SubTitleList"><i class="dp-Icon dp-UKIcon"></i>English (UK)</dd>

                                <dt class="dp-TitleList">Channel</dt>
                                <dd class="dp-SubTitleList"><i class="dp-Icon dp-iconVoice"></i>Voice</dd>
                            </dl>
                        </div>
                        <div class="dp-SidebarSection dp-SectionControls">
                            <div class="dp-SectionTitle">
                                <div class="dp-TitleControls dp-StatusTimes">Status &amp; times</div>
                                <span class="dp-LineTitle"></span>
                                <a href="#" class="dp-Controls">
                                    <i class="dp-Icon dp-DotsIcon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="dp-SectionBody">
                            <div class="dp-ButtonWrapper">
                                <button class="dp-ActionButton dp-BorderPink ActionButton--large" type="button">
                                    Awaiting Agent
                                </button>
                                <button class="dp-ActionButton dp-BorderPink dp-Pink" type="button">
                                    10
                                </button>
                            </div>
                            <div class="dp-DataWrapper">
                                <span class="dp-DateItem">
                                    <i class="dp-Icon dp-iconCalendar"></i>2 weeks ago
                                </span>
                                <span class="dp-DateItem">
                                    <i class="dp-Icon dp-iconUserTime"></i>12 hr 43 min
                                </span>
                            </div>
                        </div>
                        <div class="dp-SidebarSection dp-SectionControls">
                            <div class="dp-SectionTitle">
                                <div class="dp-TitleControls dp-Slas">SLAS</div>
                                <span class="dp-LineTitle"></span>
                                <a href="#" class="dp-Controls">
                                    <i class="dp-Icon dp-DotsIcon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="dp-SectionBody">
                            <div class="dp-TagItem">
                                <span class="dp-TimeStatus">
                                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                                </span>
                                <span class="dp-TagDescription">Time until resolution</span>
                            </div>
                            <div class="dp-TagItem">
                                <span class="dp-TimeStatus">
                                    <span class="dp-Tag Tag--small Tag--orange">10.5 hours</span>
                                </span>
                                <span class="dp-TagDescription">Time awaiting reply</span>
                            </div>
                        </div>
                        <div class="dp-SidebarSection">
                            <div class="dp-SectionTitle">Agents &amp; team</div>
                            <span class="dp-LineTitle"></span>
                        </div>
                        <div class="dp-OrganizationSubtitle">
                            <div>AGENT</div>  
                            <div>
                                <a href="#">Assign to me</a>
                                <a href="#" class="dp-BorderLeft">Unassign</a>
                            </div>
                        </div>
                        <div class="dp-SectionBody-item">
                            <div class="dp-title-item dp-optical dp-Agent">
                                <div class="dp-UserAvatarName">
                                    <span class="dp-Badge Badge--empty"></span>
                                    Chris Pattison
                                </div>
                            </div>
                        </div>
                        <div class="dp-OrganizationSubtitle">
                            <span>TEAM</span>  
                            <a href="#">Unassign</a>
                        </div>
                        <div class="dp-SectionBody-item">
                            <div class="dp-title-item dp-optical">
                                <div class="dp-UserAvatarName">
                                    2nd Level Support
                                </div>
                            </div>
                        </div>
                        <div class="dp-OrganizationSubtitle">
                            <div>FOLLOWERS <a href="#" class="dp-NumLink">(2)</a></div>  
                            <div>
                                <a href="#">Add</a>
                                <a href="#" class="dp-BorderLeft">Add me</a>
                            </div>
                        </div>
                        <div class="dp-TagWrapper">       
                            <div class="dp-Tag Tag--close">
                                <span class="dp-Badge Badge--empty"></span>Wendy Pride<span class="dp-iconClose"></span>
                            </div>
                            <div class="dp-Tag Tag--close">
                                <span class="dp-Badge Badge--empty"></span>Zack Cooper<span class="dp-iconClose"></span>
                            </div>
                        </div>
                        <div class="dp-BorderBottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dp-TemplateInnerContentRight">
                
                <div class="dp-ReplyBox">
                  <div class="dp-Actions">
                      <ul class="dp-ActionsItems">
                          <li class="dp-ActionsItem">Reply</li>
                          <li class="dp-ActionsItem">Add Note</li>
                          <li class="dp-ActionsItem">Forward</li>
                          <li class="dp-ActionsItem dp-MenuBarItem">
                              Macros
                              <span class="dp-Arrow"></span>
                          </li>
                      </ul>
                  </div>
                  <textarea class="dp-ReplyEditor"></textarea>
                </div>

                <div class="dp-TabContainer">
                  <div class="dp-Tabs">
                      <ul class="dp-TabItesm">
                          <li class="dp-TabItem is-active"> Messages & Notes </li>
                          <li class="dp-TabItem">Full Log</li>
                      </ul>
                  </div>
                </div>

                <div class="dp-user dp-TicketMessage">
                  <div class="dp-MessageContainer">
                    <div class="dp-MessageHeader">
                      <div class="dp-Left">
                        <div class="dp-title-item dp-optical">
                          <div class="dp-UserAvatarName">
                            <span class="dp-Badge Badge--empty"></span>
                            <span class="">Zach Prudent</span><a href="mailto:zack.prudent@techcompany.com"><i class="dp-Icon dp-iconEmail"></i>zack.prudent@techcompany ...</a>
                          </div>
                        </div>
                      </div>
                      <div class="dp-Right">
                        <div class="dp-Time">Today at 11:34am</div>
                        <a href="#" class="dp-Icon dp-iconSetting"></a>
                      </div>
                    </div>
                    <div class="dp-MessageTitle">
                      <p class="dp-Type">User Reply</p>
                    </div>
                    <div class="dp-MessageBody">
                      <div class="Content">
                        <p>Good day Brian,</p>
                        <p>We’ve been having another issue with this version of DeskPro. I’ve been doing some troubleshooting with our SSO partner but no luck so far so I thought it wouldn’t hurt to bounce it off of you. The thing is, we configured both Agent and User modules to use SSO and it was working great for a few days. When I came into the office last week Friday I realized that I wasn’t able to log into the Admin/Agent portals but I was able to log in to the User portal. Upon further investigation, we realized that we weren’t able to log in if the SSO URLs were the same.</p>
                        <p>We tried clearing browser data in Chrome and trying incognito but no luck. Have you ever seen anything like this before?</p>
                        <p>Let me know if anything pops up in your head.</p>
                        Thanks,<br></br>
                        Zack
                      </div>
                      <a href="#" class="dp-ExpandButton"><span class="dp-dots">&hellip;</span></a>
                    </div>
                  </div>

                  <div class="dp-MessageContainer dp-ColorContainer">
                    <div class="dp-MessageHeader">
                      <div class="dp-Left">
                        <div class="dp-title-item dp-optical">

                          <div class="dp-UserAvatarName">
                            <span class="dp-Badge Badge--empty dp-DarkBadge"></span>
                            <span>Harry Krimbo</span>
                          </div>

                        </div>
                      </div>
                      <div class="dp-Right">
                        <div class="dp-Time">03/11/2016 at 09.58am</div>
                        <a href="#" class="dp-Icon dp-iconSetting"></a>
                      </div>
                    </div>
                    <div class="dp-MessageTitle">
                      <p class="dp-Type dp-Orange">Agent note</p>
                    </div>
                    <div class="dp-MessageBody">
                      <div class="Content">
                        <p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
                      </div>
                    </div>
                  </div>

                  <div class="dp-MessageContainer">
                    <div class="dp-MessageHeader">
                      <div class="dp-Left">
                        <div class="dp-title-item dp-optical">
                          <div class="dp-UserAvatarName">
                            <span class="dp-Badge Badge--empty dp-DarkBadge"></span>
                            <span class="">Harry Krimbo</span>
                          </div>
                        </div>
                      </div>
                      <div class="dp-Right">
                        <div class="dp-Time">03/11/2016 at 09.58am</div>
                        <a href="#" class="dp-Icon dp-iconSetting"></a>
                      </div>
                    </div>
                    <div class="dp-MessageTitle">
                      <p class="dp-Type dp-Green">Agent reply</p>
                    </div>
                    <div class="dp-MessageBody">
                      <div class="Content">
                        <p>Hi Zack,</p>
                        <p>I’ve asked one of the tech guys to take a look and find the best sol ...</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      
    );
  }
}

module.exports = Demo;
