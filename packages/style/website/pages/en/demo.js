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

        <div class="dp-UserOverlay">
            <div class="dp-OverlayWrapp">
                <div class="dp-UserContainer dp-UserTitleInfo">
                    <div class="dp-UserTabName">
                        <div class="dp-UserInfo">
                            <span class="dp-Icon dp-Avatar">
                                <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                            </span>
                            <span class="dp-UserNameId">
                                <span class="dp-UserName"> Zack Prudent </span>
                                <span class="dp-UserId"> #83995 </span>
                            </span>
                        </div>
                        <div>
                            <span class="dp-Icon dp-IconUserArrow"></span>
                            <span class="dp-Icon dp-IconCloseGrey"></span>
                        </div>
                    </div>
                </div>
                <div class="dp-UserContainer dp-BrandsInfo">
                    <div class="dpApps-AppPanel">
                      <div class="dpApps-AppTabs is-horizontal">
                        <div class="dpApps-ButtonTabs--wrap">
                          <button class="dpApps-ButtonTabs is-selected">
                            <span class="dpApps-IconHamburger"></span>
                          </button>
                          <button class="dpApps-ButtonTabs">
                            <img class="dpApps-ButtonsImg" src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></img>
                          </button>
                        </div>
                        <button class="dpApps-ButtonTabs ButtonTabs-arrow">
                          <button class="dpApps-ButtonTabs ButtonTabs-arrow dp-DropMenuJs"><i class="dpApps-IconArrow iconArrow--left"></i></button>
                        </button>
                      </div>
                      <div class="dpApps-AppPanelBody">
                        <div class="dpApps-AppFrame">
                          <div class="dpApps-AppBar dpApps-Level">
                            <div class="dpApps-LevelLeft">
                              <div class="dpApps-AppBarIcon-wrap">
                                <div class="dpApps-Icon">
                                  <img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img>
                                </div>
                              </div>
                              <span class="dpApps-Title">Trello</span>
                            </div>
                            <div class="dpApps-LevelRight">
                              <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                                <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                              </a>
                              <a href="" class="dpApps-ActionListIcon">
                                <i class="dpApps-IconArrow iconArrow--top"></i>
                              </a>
                            </div>
                          </div>
                          <section class="dpApps-AppBody dpApps-Section">
                            <div class="dpApps-Level">
                              <div class="dpApps-LevelLeft">
                                <span class="dpApps-AppBodyTitle">Linked cards</span>
                              </div>
                              <div class="dpApps-ActionList dpApps-LevelRight">
                                <a href="" class="dpApps-ActionListItem">
                                  <i class="dpApps-IconSearch"></i>
                                  <span class="dpApps-ActionListLabel">Find</span>
                                </a>
                                <a href="" class="dpApps-ActionListItem">
                                  <i class="dpApps-IconPlus"></i>
                                  <span class="dpApps-ActionListLabel">Create</span>
                                </a>
                              </div>
                            </div>
                            <div class="dpApps-AppBodyItem">
                              <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                                <i class="dpApps-Icon">
                                  <img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img>
                                </i>
                                <span class="dpApps-LevelItemTitle">Blog calender</span>
                                <div class="dpApps-AppBodySetting">
                                  <i class="dpApps-IconSettings"></i>
                                  <div class="dpApps-AppSettingDropdown">
                                    <div class="dpApps-AppSettingItem">
                                      <i class="dpApps-IconOpen"></i>
                                      <span class="dpApps-AppSettingItem--text">Open</span>
                                    </div>
                                    <div class="dpApps-AppSettingItem">
                                      <i class="dpApps-IconUnlink"></i>
                                      <span class="dpApps-AppSettingItem--text">Unlink</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="dpApps-AppBodyItemRow dpApps-Level">
                                <div class="dpApps-AppBodyContent dpApps-LevelLeft">
                                  <span>In Planning</span><span class="dpApps-AppBodySeparator"> | </span><span>Linked 12/06/2018</span>
                                </div>
                                <div class="dpApps-LevelRight">
                                  <i class="dpApps-Icon dpApps-Icon--Round">
                                    <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt=""></img>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div class="dpApps-AppFrame">
                          <div class="dpApps-AppBar dpApps-Level">
                            <div class="dpApps-LevelLeft">
                              <div class="dpApps-AppBarIcon-wrap">
                                <div class="dpApps-Icon">
                                  <img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></img>
                                </div>

                              </div>
                              <span class="dpApps-Title">You Track</span>
                            </div>
                            <div class="dpApps-LevelRight">
                              <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                                <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                              </a>
                              <a href="" class="dpApps-ActionListIcon">
                                <i class="dpApps-IconArrow iconArrow--top"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="dpApps-AppFrame is-colapsed">
                          <div class="dpApps-AppBar dpApps-Level">
                            <div class="dpApps-LevelLeft">
                              <div class="dpApps-AppBarIcon-wrap">
                                <div class="dpApps-Icon">
                                  <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img>
                                </div>
                              </div>
                              <span class="dpApps-Title">Mailchimp</span>
                            </div>
                            <div class="dpApps-LevelRight">
                              <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                                <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                              </a>
                              <a href="" class="dpApps-ActionListIcon">
                                <i class="dpApps-IconArrow iconArrow--top"></i>
                              </a>
                            </div>
                          </div>
                          <section class="dpApps-AppBody dpApps-Section">
                            <div class="dpApps-Level">
                              <div class="dpApps-LevelLeft">
                                <span class="dpApps-AppBodyTitle">Linked issues</span>
                              </div>
                              <div class="dpApps-ActionList dpApps-LevelRight">
                                <a href="" class="dpApps-ActionListItem">
                                  <i class="dpApps-IconSearch"></i>
                                  <span class="dpApps-ActionListLabel">Find</span>
                                </a>
                                <a href="" class="dpApps-ActionListItem">
                                  <i class="dpApps-IconPlus"></i>
                                  <span class="dpApps-ActionListLabel">Create</span>
                                </a>
                              </div>
                            </div>
                            <div class="dpApps-AppBodyItem">
                              <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                                <i class="dpApps-Icon">
                                  <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img>
                                </i>
                                <span class="dpApps-LevelItemTitle">#dpApps-1170-symfony 4/p lorem ipsum</span>
                              </div>
                              <div class="dpApps-AppBodyItemRow dpApps-Level">
                                <div class="dpApps-AppBodyContent dpApps-LevelLeft">
                                  <span>Linked 12/06/2018</span>
                                </div>
                                <div class="dpApps-LevelRight">
                                  <i class="dpApps-Icon dpApps-Icon--Round">
                                    <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt=""></img>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div class="dpApps-AddApp">
                          <div class="dpApps-Level">
                            <a href="" class="dpApps-LevelLeft">
                              <i class="dpApps-IconPlus"></i>
                              <span class="dpApps-AddApp-text">Add an app</span>
                            </a>
                            <a href="" class="dpApps-LevelRight">
                              <i class="dpApps-IconClose"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="dp-LeftSidebar">
                        <li><button class="dpApps-ButtonTabs ButtonTabs-arrow dp-DropMenuJs"><i class="dpApps-IconArrow iconArrow--right"></i></button></li>
                        <li class="dp-BarIcon-wrap">
                            <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img></span>
                        </li>
                        <li class="dp-BarIcon-wrap">
                            <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></img></span>
                        </li>
                        <li class="dp-BarIcon-wrap">
                            <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img></span>
                        </li>
                        <li class="dp-BarIcon-wrap">
                            <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></img></span>
                        </li>
                        <li class="dp-BarIcon-wrap">
                            <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/salesforce-logo.svg" alt=""></img></span>
                        </li>
                    </ul>
                    <div class="dp-OverlayContent">
                        <div class="dp-TitleRow">
                            <span class="dp-UserInfo">
                                <span class="dp-Icon dp-Avatar dp-InfoItem">
                                    <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                                </span>
                                <span class="dp-InfoItem dp-Tag">#83995</span>
                                <span class="dp-InfoItem dp-UserName">Zack Prudent</span>
                            </span>

                            <span><span class="dp-Icon dp-IconCloseBlue dp-DropMenuJs"></span></span>
                        </div>
                        <div class="dp-Label">
                            <div class="dp-LabelItem dp-LabelTitle">Labels:</div>
                            <div class="dp-LabelItem dp-Tag Tag--close Tag--purple">Vip<span class="dp-iconClose"></span></div>
                            <div class="dp-LabelItem dp-Icon dp-add_tab"></div>
                        </div>
                        <ul class="dp-MenuBarList">
                            <li class="dp-MenuBarItem">
                                <span class="dp-Icon dp-IconCloud"></span>
                                <span class="dp-Title">Cloud<span class="dp-Arrow"></span></span>
                            </li>
                            <li class="dp-MenuBarItem dp-redLightColor">
                                <span class="dp-Icon dp-billing"></span>
                                <span class="dp-Title">Billing<span class="dp-Arrow"></span></span>
                            </li>
                            <li class="dp-MenuBarItem dp-greenColor">
                                <span class="dp-Icon dp-liscense"></span>
                                <span class="dp-Title">License<span class="dp-Arrow"></span></span>
                            </li>
                        </ul>
                        <div class="dp-TabContainer">
                            <div class="dp-Tabs">
                                <ul class="dp-TabItesm">
                                    <li class="dp-TabItem is-active"> Tickets </li>
                                    <li class="dp-TabItem"> Activity stream </li>
                                    <li class="dp-TabItem"> User groups </li>
                                    <li class="dp-TabItem"> Brands </li>
                                </ul>
                            </div>
                        </div>
                        <ul class="dp-TicketsInfo">
                            <li class="dp-TicketsInfoItem dp-TicketsInfoTitle is-active">
                                <span class="dp-idItem">ID</span>
                                <span class="dp-SubjectItem">SUBJECT</span>
                                <span class="dp-StatusItem dp-MenuBarItem">STATUS & URGENCY<span class="dp-Arrow"></span></span>
                            </li>
                            <li class="dp-TicketsOpen">
                                <ul>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#83995</span>
                                        <span class="dp-SubjectItem">New agent questions</span>
                                        <span class="dp-StatusItem dp-Orange">Awaiting agent <span class="dp-qt">4</span><span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#74562</span>
                                        <span class="dp-SubjectItem">Translations</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#63331</span>
                                        <span class="dp-SubjectItem">ASP Licensing</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#83995</span>
                                        <span class="dp-SubjectItem">Ver5 Upgrade</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#74562</span>
                                        <span class="dp-SubjectItem">Your Plan</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#63331</span>
                                        <span class="dp-SubjectItem">New feature idea</span>
                                        <span class="dp-StatusItem dp-Green">Resolve</span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#83995</span>
                                        <span class="dp-SubjectItem">Issue creating multiple tickets</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                    <li class="dp-TicketsInfoItem">
                                        <span class="dp-idItem">#74562</span>
                                        <span class="dp-SubjectItem">FW: DeskPRO error</span>
                                        <span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="dp-Files">
                            Notes<span class="dp-LabelItem dp-Icon dp-add_tab"></span>
                        </div>
                        <div class="dp-TicketMessage">
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
                                        <a href="#" class="dp-Icon dp-IconDelete"></a>
                                    </div>
                                </div>
                                <div class="dp-MessageTitle">
                                    <p class="dp-Type dp-Orange"></p>
                                </div>
                                <div class="dp-MessageBody">
                                    <div class="Content">
                                        <p class="dp-txt">Zack recently had some trouble setting up one of his email address. He was quite frustrated so I suggested he call us next time if he is having problems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dp-TicketMessage">
                            <div class="dp-MessageContainer dp-ColorContainer">
                                <div class="dp-MessageHeader">
                                    <div class="dp-Left">
                                        <div class="dp-title-item dp-optical">

                                            <div class="dp-UserAvatarName">
                                                <span class="dp-Badge Badge--empty dp-DarkBadge"></span>
                                                <span>Chris Padfield</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="dp-Right">
                                        <div class="dp-Time">03/11/2016 at 09.58am</div>
                                        <a href="#" class="dp-Icon dp-IconDelete"></a>
                                    </div>
                                </div>
                                <div class="dp-MessageTitle">
                                    <p class="dp-Type dp-Orange"></p>
                                </div>
                                <div class="dp-MessageBody">
                                    <div class="Content">
                                        <p class="dp-txt">I think Tech Company are planning to add several more agents in the new year, it’s probably worth reaching out to Zack closer to the time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dp-Files">
                            Files<span class="dp-LabelItem dp-Icon dp-add_tab"></span>
                        </div>
                        <div class="dp-FilesList">
                            <div class="dp-FilesInfo">
                                <div class="dp-LeftInfo">
                                    <span class="dp-TranslatItem">Translations.png</span>
                                    <span class="dp-ExtItem">250 KB</span>
                                </div>
                                <div class="dp-RightInfo">
                                    <span class="dp-DeleteItem">Delete<span class="dp-Arrow"></span></span>
                                    <span class="dp-EditItem">Edit<span class="dp-Arrow"></span></span>             
                                </div>
                            </div>
                            <div class="dp-FilesInfo">
                                <div class="dp-LeftInfo">
                                    <span class="dp-TranslatItem">Plan.png</span>
                                    <span class="dp-ExtItem">456 KB</span>
                                </div>
                                <div class="dp-RightInfo">
                                    <span class="dp-DeleteItem">Delete<span class="dp-Arrow"></span></span>
                                    <span class="dp-EditItem">Edit<span class="dp-Arrow"></span></span>             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div class="dp-TemplateLeftCol">
        <ul class="dp-ModuleNav">
          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-tickets" href="#"></a>
            <span class="dp-IconTooltip">Tickets</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-chats" href="#"></a>
            <span class="dp-IconTooltip">Chats</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-crm" href="#"></a>
            <span class="dp-IconTooltip">CRM</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-feedback" href="#"></a>
            <span class="dp-IconTooltip">Feedback</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-publish" href="#"></a>
            <span class="dp-IconTooltip">Publish</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-icontasks" href="#"></a>
            <span class="dp-IconTooltip">Tasks</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-reports" href="#"></a>
            <span class="dp-IconTooltip">Reports</span>
          </li>

          <li class="dp-ModuleNavList dp-DropMenuJs">
            <a class="dp-Icon dp-admin" href="#"></a>
            <span class="dp-IconTooltip">Admin</span>
          </li>

          <li class="dp-ModuleNavList is-borderBottom dp-DropMenuJs">
            <a class="dp-Icon dp-billing_money" href="#"></a>
            <span class="dp-IconTooltip">Billing</span>
          </li>

          <li class="dp-ModuleNavList dp-integration dp-DropMenuJs">
            <a class="dp-Icon dp-portal" href="#"></a>
            <span class="dp-IconTooltip">
                <span class="dp-TitleTooltip"> Portal </span>
                <ul class="dp-AccountList">
                    <li class="dp-AccountItem is-active">
                        <a href="#" class="dp-Icon-Title dp-raven">
                            <span class="dp-Icon dp-IconPlane"></span>
                            <span>Raven Paper
                                <span class="dp-BuyNow">support.ravenpaper.com</span>
                            </span>
                        </a>
                    </li>
                    <li class="dp-AccountItem">
                        <a href="#" class="dp-Icon-Title dp-raven">
                            <span class="dp-Icon dp-IconPlaneOrange"></span> 
                            <span>Raven Paper Crafts
                                <span class="dp-BuyNow">support.ravenpapercrafts.com</span>
                            </span>
                        </a>
                    </li>
                    <li class="dp-AccountItem">
                        <a href="#" class="dp-Icon-Title dp-raven">
                            <span class="dp-Icon dp-IconPlaneViolet"></span>
                            <span>
                                <span>RP Europe
                                    <span class="dp-BuyNow">support.ravenpaper.com</span>
                                </span>
                            </span>
                        </a>
                    </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
      <div class="dp-TemplateMainColl">

        <div class="dp-TopActionRow">
          <div class="dp-TopActionRowLeft">
            <div class="dp-Search">
                <form>
                    <button type="submit" class="dp-Icon dp-find"></button>
                    <input type="" placeholder="Search ..." class="dp-DropMenuJs"></input>
                </form>
                <div class="dp-IconSection">
                    <ul class="dp-IconPanelList">
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-history"></span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Badge Badge--empty">
                                <span class="dp-Badge dp-red">3</span>
                                <span class="dp-Badge dp-green"></span>
                            </span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Badge Badge--empty">
                                <span class="dp-Badge dp-green"></span>
                            </span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Badge Badge--empty">
                                <span class="dp-Badge dp-red">1</span>
                                <span class="dp-Badge dp-green"></span>
                            </span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-add_im"></span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="dp-TopActionRowRight">
            <div class="dp-ControlPanel">
                <div class="dp-IconSection">
                    <ul class="dp-IconPanelList">
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-notifications"></span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-voice--green"></span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-chat--green"></span>
                        </li>
                        <li class="dp-MenuBarItem">
                            <span class="dp-Icon dp-Avatar">
                                <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                            </span>
                            <span class="dp-Arrow"></span>
                        </li>
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
                                    <span class="dp-Icon dp-add_tab"></span>
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
                <div class="dp-Title">
                  <div class="dp-TitleName dp-DropMenuJs">
                    <span class="dp-Icon dp-menu"></span>
                    All tickets <span class="dp-qt">(90)</span>
                    <span class="dp-Icon dp-iconArrowDown"></span>
                  </div>
                  <div class="dp-TicketsThumb">
                    <span class="dp-Icon dp-list_view is-active"></span>
                    <span class="dp-Icon dp-table_view"></span>
                    <span class="dp-Icon dp-kanban_view"></span>
                  </div>
                </div>
              </div>
            </div>
            <ul class="dp-TicketMenu">
                <li class="dp-TicketMenuItem dp-MenuBarItem is-active dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>Awaiting agent</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>My tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">1</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Tickets I follow<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Unassigned tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>Filters</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>Saved Searches</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>Problems & incidents (2)</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>Labels</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                    <span class="dp-TitleMenu">
                        <span>My stars (3)</span>
                        <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                            </a>
                        </li>
                    </ul>
                </li>
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
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1" checked="checked"></input>
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
                    <ul class="dp-FilterResultMenu dp-ContextMenu">
                      <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                        <ul class="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div class="dp-SearchForm">
                                <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                <input type="text" class="dp-SearchInput"></input>
                              </div>
                            </form>
                          </li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                        </ul>
                      </li>
                      <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                        <ul class="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div class="dp-SearchForm">
                                <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                <input type="text" class="dp-SearchInput"></input>
                              </div>
                            </form>
                          </li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        </ul>
                      </li>
                      <li class="dp-DropdownDivider"></li>
                      <li>Status <span class="dp-Arrow"></span>
                        <ul class="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div class="dp-SearchForm">
                                <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                <input type="text" class="dp-SearchInput"></input>
                              </div>
                            </form>
                          </li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                        </ul>
                      </li>
                      <li>Urgency <span class="dp-Arrow"></span>
                        <ul class="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div class="dp-SearchForm">
                                <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                <input type="text" class="dp-SearchInput"></input>
                              </div>
                            </form>
                          </li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                        </ul>
                      </li>
                      <li class="dp-DropdownDivider"></li>
                      <li><a href="#" class="dp-listItem">Place on hold</a></li>
                      <li><a href="#" class="dp-listItem">Lock</a></li>
                      <li><a href="#" class="dp-listItem">Unlock</a></li>
                    </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
                  </li>

                  <li class="dp-FilterResultItem" id="elem">
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
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
                      <ul class="dp-FilterResultMenu dp-ContextMenu">
                        <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li>Status <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                          </ul>
                        </li>
                        <li>Urgency <span class="dp-Arrow"></span>
                          <ul class="dp-SubContextMenu dp-ContextMenu">
                            <li>
                              <form>
                                <div class="dp-SearchForm">
                                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                  <input type="text" class="dp-SearchInput"></input>
                                </div>
                              </form>
                            </li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                            <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                          </ul>
                        </li>
                        <li class="dp-DropdownDivider"></li>
                        <li><a href="#" class="dp-listItem">Place on hold</a></li>
                        <li><a href="#" class="dp-listItem">Lock</a></li>
                        <li><a href="#" class="dp-listItem">Unlock</a></li>
                      </ul>
                  </li>
              </ul>
            </form>





                <div class="dp-SearchSnippets dp-MainSnippets">
                    <div class="dp-SearchSnippetsWrapp">

                        <div class="dp-Search">
                            <form class="dp-FindForm">
                                <button type="submit" class="dp-Icon dp-find"></button>
                                <input type="" placeholder="Search ..."></input>
                            </form>
                            <div>
                                <span class="dp-Icon dp-IconCloseBlue dp-DropMenuJs"></span>
                            </div>
                        </div>

                        <ul class="dp-SnippetsList">
                            <li class="dp-SnippetItem dp-TitleItem"><span class="dp-SnippetsTitle">Snippets (15)</span> 
                                <span class="dp-Icon dp-IconAgent"></span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Admin manual<span class="dp-Tag">%admin%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">AGENT manual<span class="dp-Tag">%agent%</span></span> 
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">API docs<span class="dp-Tag">%api%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Price Quote<span class="dp-Tag">%price%</span></span>
                                <span></span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Delete agent<span class="dp-Tag">%deleteagent%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">SSL for custom Portal/Chat<span class="dp-Tag">%SSL%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Where is data hosted?<span class="dp-Tag">%datahost%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Admin manual<span class="dp-Tag">%admin%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Agent manual<span class="dp-Tag">%agent%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Api docs<span class="dp-Tag">%api%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">CRM related docs<span class="dp-Tag">%APICRM%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Developer manual<span class="dp-Tag">%devm%</span></span> 
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Delete agent<span class="dp-Tag">%deleteagent%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">SSL for custom Portal/Chat<span class="dp-Tag">%SSL%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                </span>
                            </li>
                            <li class="dp-SnippetItem">
                                <span class="">Where is data hosted?<span class="dp-Tag">%datahost%</span></span>
                                <span>
                                    <span class="dp-Icon dp-icon-UK"></span>
                                    <span class="dp-Icon dp-icon-SP"></span>
                                    <span class="dp-Icon dp-icon-GE"></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

          </div>




          <div class="dp-TemplateMainContentRight">
            <ul class="dp-LeftSidebar">
                <li><button class="dpApps-ButtonTabs ButtonTabs-arrow"><i class="dpApps-IconArrow iconArrow--left"></i></button></li>
                <li class="dp-BarIcon-wrap">
                    <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img></span>
                </li>
                <li class="dp-BarIcon-wrap">
                    <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></img></span>
                </li>
                <li class="dp-BarIcon-wrap">
                    <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img></span>
                </li>
                <li class="dp-BarIcon-wrap">
                    <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></img></span>
                </li>
                <li class="dp-BarIcon-wrap">
                    <span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/salesforce-logo.svg" alt=""></img></span>
                </li>
            </ul>
            <div class="dpApps-AppPanel">
              <div class="dpApps-AppTabs is-horizontal">
                <div class="dpApps-ButtonTabs--wrap">
                  <button class="dpApps-ButtonTabs is-selected">
                    <span class="dpApps-IconHamburger"></span>
                  </button>
                  <button class="dpApps-ButtonTabs">
                    <img class="dpApps-ButtonsImg" src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></img>
                  </button>
                </div>
                <button class="dpApps-ButtonTabs ButtonTabs-arrow">
                  <i class="dpApps-IconArrow iconArrow--left"></i>
                </button>
              </div>
              <div class="dpApps-AppPanelBody">
                <div class="dpApps-AppFrame">
                  <div class="dpApps-AppBar dpApps-Level">
                    <div class="dpApps-LevelLeft">
                      <div class="dpApps-AppBarIcon-wrap">
                        <div class="dpApps-Icon">
                          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img>
                        </div>
                      </div>
                      <span class="dpApps-Title">Trello</span>
                    </div>
                    <div class="dpApps-LevelRight">
                      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                      </a>
                      <a href="" class="dpApps-ActionListIcon">
                        <i class="dpApps-IconArrow iconArrow--top"></i>
                      </a>
                    </div>
                  </div>
                  <section class="dpApps-AppBody dpApps-Section">
                    <div class="dpApps-Level">
                      <div class="dpApps-LevelLeft">
                        <span class="dpApps-AppBodyTitle">Linked cards</span>
                      </div>
                      <div class="dpApps-ActionList dpApps-LevelRight">
                        <a href="" class="dpApps-ActionListItem">
                          <i class="dpApps-IconSearch"></i>
                          <span class="dpApps-ActionListLabel">Find</span>
                        </a>
                        <a href="" class="dpApps-ActionListItem">
                          <i class="dpApps-IconPlus"></i>
                          <span class="dpApps-ActionListLabel">Create</span>
                        </a>
                      </div>
                    </div>
                    <div class="dpApps-AppBodyItem">
                      <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                        <i class="dpApps-Icon">
                          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></img>
                        </i>
                        <span class="dpApps-LevelItemTitle">Blog calender</span>
                        <div class="dpApps-AppBodySetting">
                          <i class="dpApps-IconSettings"></i>
                          <div class="dpApps-AppSettingDropdown">
                            <div class="dpApps-AppSettingItem">
                              <i class="dpApps-IconOpen"></i>
                              <span class="dpApps-AppSettingItem--text">Open</span>
                            </div>
                            <div class="dpApps-AppSettingItem">
                              <i class="dpApps-IconUnlink"></i>
                              <span class="dpApps-AppSettingItem--text">Unlink</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="dpApps-AppBodyItemRow dpApps-Level">
                        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
                          <span>In Planning</span><span class="dpApps-AppBodySeparator"> | </span><span>Linked 12/06/2018</span>
                        </div>
                        <div class="dpApps-LevelRight">
                          <i class="dpApps-Icon dpApps-Icon--Round">
                            <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt=""></img>
                          </i>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="dpApps-AppFrame">
                  <div class="dpApps-AppBar dpApps-Level">
                    <div class="dpApps-LevelLeft">
                      <div class="dpApps-AppBarIcon-wrap">
                        <div class="dpApps-Icon">
                          <img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></img>
                        </div>
                      </div>
                      <span class="dpApps-Title">You Track</span>
                    </div>
                    <div class="dpApps-LevelRight">
                      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                      </a>
                      <a href="" class="dpApps-ActionListIcon">
                        <i class="dpApps-IconArrow iconArrow--top"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="dpApps-AppFrame is-colapsed">
                  <div class="dpApps-AppBar dpApps-Level">
                    <div class="dpApps-LevelLeft">
                      <div class="dpApps-AppBarIcon-wrap">
                        <div class="dpApps-Icon">
                          <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img>
                        </div>
                      </div>
                      <span class="dpApps-Title">Mailchimp</span>
                    </div>
                    <div class="dpApps-LevelRight">
                      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
                        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt=""></img>
                      </a>
                      <a href="" class="dpApps-ActionListIcon">
                        <i class="dpApps-IconArrow iconArrow--top"></i>
                      </a>
                    </div>
                  </div>
                  <section class="dpApps-AppBody dpApps-Section">
                    <div class="dpApps-Level">
                      <div class="dpApps-LevelLeft">
                        <span class="dpApps-AppBodyTitle">Linked issues</span>
                      </div>
                      <div class="dpApps-ActionList dpApps-LevelRight">
                        <a href="" class="dpApps-ActionListItem">
                          <i class="dpApps-IconSearch"></i>
                          <span class="dpApps-ActionListLabel">Find</span>
                        </a>
                        <a href="" class="dpApps-ActionListItem">
                          <i class="dpApps-IconPlus"></i>
                          <span class="dpApps-ActionListLabel">Create</span>
                        </a>
                      </div>
                    </div>
                    <div class="dpApps-AppBodyItem">
                      <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                        <i class="dpApps-Icon">
                          <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></img>
                        </i>
                        <span class="dpApps-LevelItemTitle">#dpApps-1170-symfony 4/p lorem ipsum</span>
                      </div>
                      <div class="dpApps-AppBodyItemRow dpApps-Level">
                        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
                          <span>Linked 12/06/2018</span>
                        </div>
                        <div class="dpApps-LevelRight">
                          <i class="dpApps-Icon dpApps-Icon--Round">
                            <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt=""></img>
                          </i>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="dpApps-AddApp">
                  <div class="dpApps-Level">
                    <a href="" class="dpApps-LevelLeft">
                      <i class="dpApps-IconPlus"></i>
                      <span class="dpApps-AddApp-text">Add an app</span>
                    </a>
                    <a href="" class="dpApps-LevelRight">
                      <i class="dpApps-IconClose"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ul class="dp-TabBarList">
                <li class="dp-AddTabButton">
                    <a class="dp-Icon dp-iconAdd" href="#"></a>
                </li>
                <li class="dp-TabBarItem dp-DropMenuJs">
                    <a href="#">
                        <span class="dp-Flex">
                            <span class="dp-Icon dp-iconEmail" ></span>
                            <span class="dp-Title">RE: Need some help?</span>
                        </span>
                        <span class="dp-Flex">
                            <span class="dp-Icon dp-Avatar">
                                <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                            </span>
                            <span class="dp-Subtitle">James Colbert</span>
                        </span>
                        <span class="dp-iconClose"></span>
                    </a>
                </li>
                <li class="dp-TabBarItem is-active dp-DropMenuJs">
                    <a href="#">
                        <span class="dp-Flex">
                            <span class="dp-Icon dp-iconEmail"></span>
                            <span class="dp-Title">SSO working well wit...</span>
                        </span>
                        <span class="dp-Flex">
                            <span class="dp-Icon dp-Avatar">
                                <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                            </span>
                           <span class="dp-Subtitle">Zack Prudent</span>
                        </span>
                        <span class="dp-iconClose"></span>
                    </a>
                </li>
                <li class="dp-TabBarItem dp-DropMenuJs">
                    <a href="#">
                        <span class="dp-Flex">
                            <span class="dp-Icon dp-iconOrganisation"></span>
                            <span class="dp-Title">Deskpro</span>
                        </span>
                        <span class="dp-Flex">
                           <span class="dp-Subtitle">Organisation</span>
                        </span>
                        <span class="dp-iconClose"></span>
                    </a>
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
              <button class="dp-ActionButton dp-DropMenuJs" type="button">
                <span class="dp-Icon dp-iconRocketBlue"></span>
                <span class="dp-Icon dp-iconRocketwhite"></span>
                ACTIONS
              </button>
              <ul class="dp-ContextMenu">
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
              <li class="dp-MenuBarItem dp-TasksItem dp--purple dp-DropMenuJs">
                  <span class="dp-Icon dp-tasks dp--purple">
                      <span class="dp-Badge dp-red">10</span>
                  </span>
                  <span class="dp-Title">Tasks<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem">
                  <span class="dp-Icon dp-billing"></span>
                  <span class="dp-Title">Billing<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem">
                  <span class="dp-Icon dp-liscense"></span>
                  <span class="dp-Title">License<span class="dp-Arrow"></span></span>
              </li>
              <li class="dp-MenuBarItem dp-PropertiesItem dp--redLight dp-DropMenuJs">
                  <span class="dp-Icon dp-ticket_properties dp--redLight">
                      <span class="dp-Badge dp-red">5</span>
                  </span>
                  <span class="dp-Title">Tickets Properties<span class="dp-Arrow"></span></span>
              </li>

              <div class="dp-Tasks dp-MenuBarIcon">
                <div class="dp-BarListWrapper">
                  <form>
                      <div class="dp-Actions">
                      <div class="dp-TaskEditor">
                        <textarea name="comment" placeholder="Task description"></textarea>
                          <ul class="dp-ActionsItems dp-BackgroundGray">
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
                                    <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-group"></span>30/09/2018<span class="dp-Arrow"></span></li>
                                    <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-history"></span>14:30 PM<span class="dp-Arrow"></span></li>
                                    <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-oranisation"></span>Infastructure<span class="dp-Arrow"></span></li>
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
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-group"></span>29/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-history"></span>11:30 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-oranisation"></span>Marketing<span class="dp-Arrow"></span></li>
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
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-group"></span>22/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-history"></span>16:00 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-oranisation"></span>Sales<span class="dp-Arrow"></span></li>
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
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-group"></span>19/09/2018<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-history"></span>10:30 PM<span class="dp-Arrow"></span></li>
                                  <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-oranisation"></span>Infastructure<span class="dp-Arrow"></span></li>
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

              <div class="dp-TicketProperties dp-MenuBarIcon">

                <div class="dp-BarListWrapper">
                    <div class="dp-PropertyList">
                        <ul class="dp-PropertyTitleList">
                            <li class="dp-TitleListItem">Department</li>
                            <li class="dp-TitleListItem">Product</li>
                            <li class="dp-TitleListItem">Language</li>
                            <li class="dp-TitleListItem">Channel</li>
                            <li class="dp-TitleListItem">Problems and Incidents</li>
                        </ul>
                        <ul class="dp-PropertySubTitleList">
                            <li class="dp-SubTitleListItem"><i class="dp-Icon dp-SupportIcon"></i>Support</li>
                            <li class="dp-SubTitleListItem"><i class="dp-Icon dp-iconVoice"></i>Deskpro Cloud</li>
                            <li class="dp-SubTitleListItem"><i class="dp-Icon dp-UKIcon"></i>English (UK)</li>
                            <li class="dp-SubTitleListItem"><i class="dp-Icon dp-iconVoice"></i>Voice</li>
                            <li class="dp-SubTitleListItem dp-securityItem dp-DropMenuJs is-active">
                                <i class="dp-Icon dp-iconVoice"></i>Security Breach
                                <ul class="dp-SecurityDropDown dp-ContextMenu">
                                    <li><a href="#" class="dp-RemoveBtn">Remove</a></li>
                                    <li><form><button type="submit" class="dp-Icon dp-IconSearch"></button><input type="text"></input></form></li>
                                    <li><a href="#">Inability to use iOS app Elasticsearch email indexing</a></li>
                                    <li><a href="#">Security breach</a></li>
                                    <li class="dp-AddBtn"><a href="#" class="dp-AddNew">Add new</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="dp-LinkShow"> Show empty property (7)</a>
                </div>
              </div>

            </ul>
            <div class="dp-TemplateInnerContent">
              <div class="dp-TemplateInnerContentLeft">
                <div class="dp-PageSidebar">
                  <div class="dp-PageWrapper">
                    <div class="dp-SidebarTabs">
                      <ul class="dp-SidebarTabsList">
                        <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-mass_actions dp--blue"></a></li>
                        <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-icon-user dp--blue"></a></li>
                        <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-oranisation dp--blue"></a></li>
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
                        <div class="dp-SectionBody-item dp-DropMenuJs dp-BorderBlue">
                            <p class="dp-title-item">
                                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                                Zack Prudent
                            </p>
                            <p class="dp-Email">zack.prudent@techcompany.com</p>
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

                <div class="dp-PageSidebar dp-UserActivSidebar">
                    <div class="dp-PageWrapper">
                        <div class="dp-SidebarTabs">
                            <ul class="dp-SidebarTabsList">
                                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-mass_actions dp--blue"></a></li>
                                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-icon-user dp--white"></a></li>
                                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-oranisation dp--blue"></a></li>
                            </ul>
                        </div>
                        <div class="dp-SidebarWrapper">
                            <div class="dp-SidebarRow">
                                <div class="dp-SidebarSection dp-SectionControls">
                                    <div class="dp-SectionTitle">
                                        <div class="dp-TitleControls dp-Slas">User contact information</div>
                                        <span class="dp-LineTitle"></span>
                                        <a href="#" class="dp-Controls">
                                            <i class="dp-Icon dp-DotsIcon"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="dp-SectionBody-item dp-DropMenuJs">
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
                                <dl class="dp-AddressList">
                                    <dt class="dp-TitleList">Website</dt>
                                    <dd class="dp-SubTitleList">www.techcompany.com</dd>
                                    <dt class="dp-TitleList">Address</dt>
                                    <dd class="dp-SubTitleList address">
                                        Tech Company Ltd<br></br>
                                        14 Cloud Street<br></br>
                                        London<br></br>
                                        SE1 ONG<br></br>
                                        England
                                    </dd>
                                    <dt class="dp-TitleList">IM</dt>
                                    <dd class="dp-SubTitleList"> - </dd>
                                    <dt class="dp-TitleList">Facebook</dt>
                                    <dd class="dp-SubTitleList"> - </dd>
                                    <dt class="dp-TitleList">Twitter</dt>
                                    <dd class="dp-SubTitleList"> - </dd>
                                    <dt class="dp-TitleList">LinkedIn</dt>
                                    <dd class="dp-SubTitleList"> - </dd>                       
                                </dl>
                                <div class="dp-SidebarSection dp-SectionControls">
                                    <div class="dp-SectionTitle">
                                        <div class="dp-TitleControls dp-Slas">Properties</div>
                                        <span class="dp-LineTitle"></span>
                                        <a href="#" class="dp-Controls">
                                            <i class="dp-Icon dp-DotsIcon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



<div class="dp-PageSidebar dp-SearchSnippets">
    <div class="dp-PageWrapper">
        <div class="dp-SidebarRow">

            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-TitleControls">Labels</div>
            </div>

            <form class="dp-FindForm">
                <button type="submit" class="dp-Icon dp-find"></button><input type="text"></input>
            </form>

            <ul class="dp-SearchSnippetsList">
                <li class="dp-LabelItem"><a href="#" class="is-active">Agents (8)</a></li>
                <li class="dp-LabelItem"><a href="#" class="is-active">Desk PRO Cloud (2)</a></li>
                <li class="dp-LabelItem"><a href="#">Docs (6)</a></li>
                <li class="dp-LabelItem"><a href="#">Features (20)</a></li>
                <li class="dp-LabelItem"><a href="#">Feedback (4)</a></li>
                <li class="dp-LabelItem"><a href="#" class="is-active">General (7)</a>
                    <ul class="dp-LabelSubList">
                        <li class="LabelSubItem"><a href="#">Intefrations (1)</a></li>
                        <li class="LabelSubItem"><a href="#">Post Sales (4)</a></li>
                        <li class="LabelSubItem"><a href="#" class="is-active">Reporting (1)</a></li>
                    </ul>
                </li>
                <li class="dp-LabelItem"><a href="#">Intefrations (1)</a></li>
                <li class="dp-LabelItem"><a href="#">Post Sales (4)</a></li>
                <li class="dp-LabelItem"><a href="#">Reporting (1)</a></li>
            </ul>

            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-TitleControls">Mass actions</div>
            </div>

            <div class="dp-MassActions">
                <div class="dp-SelectGroup">
                    <span class="dp-ItemRow dp-DropMenuJs">
                        <span class="dp-Title">Ownership</span>
                        <span class="dp-Icon dp-small_caret"></span>
                    </span>
                    <span class="dp-ItemRow dp-DropMenuJs">
                        <span class="dp-Title">Everyone</span>
                        <span class="dp-Icon dp-small_caret"></span>
                    </span>
                </div>

                <span class="dp-RowBtn">
                    <a href="#" class="dp-btn">SAVE</a>
                </span>
            </div>

            <div class="dp-NewSnippet">
                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-TitleControls">New snippet</div>
                </div>
                <div class="dp-RowBtn">
                    <a href="#" class="dp-btn dp-DropMenuJs">ADD SNIPPET</a>

                    <div class="dp-SearchSnippets dp-AddSnippets">
                        <div class="dp-ReplyBox">
                            <div class="dp-ReplyWrapper">
                                <div class="dp-Actions">
                                    <ul class="dp-ActionsItems">
                                        <li class="dp-ActionsItem">lorem</li>
                                        <li class="dp-ActionsItem">lorem</li>
                                        <li class="dp-ActionsItem">lorem</li>
                                        <li class="dp-ActionsItem dp-MenuBarItem">
                                            lorem
                                            <span class="dp-Arrow"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dp-AddSnippetsTitle">Snippet Title</div>
                                <textarea class="dp-ReplyEditor">Snippet Content</textarea>
                                <div class="dp-SnippetsDescription">
                                    <div>Labels <a href="#">ADD</a></div>
                                    <div class="dp-SnippetsDescriptionList">

                                        <div class="dp-SnippetsDescriptionItem">
                                            <div>Shortcode</div>
                                            <div class="dp-ActionsItem dp-precent">
                                                <form>
                                                    <input type=""></input>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="dp-SnippetsDescriptionItem">
                                            <div>Ownership</div>
                                            <div class="dp-ActionsItem dp-MenuBarItem">
                                                Everyone
                                                <span class="dp-Arrow"></span>
                                            </div>
                                        </div>
                                        <div class="dp-SnippetsDescriptionItem">
                                            <div>Visibility</div>
                                            <div class="dp-ActionsItem dp-MenuBarItem">
                                                All departments
                                                <span class="dp-Arrow"></span>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                                <div class="dp-SnippetsDescriptionBtn">
                                    <div class="dp-RowBtn">
                                        <div>
                                            <a href="#" class="dp-btn blue-btn">PUBLISH</a>
                                            <a href="#" class="dp-btn">SAVE AS DRAFT</a>
                                        </div>
                                        <a href="#" class="dp-btn">CANCEL</a>
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




              </div>
              <div class="dp-TemplateInnerContentRight">
                <div class="dp-ReplyBox">
                    <div class="dp-ReplyWrapper">
                        <div class="dp-Actions">
                            <ul class="dp-ActionsItems dp-BackgroundGray">
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
