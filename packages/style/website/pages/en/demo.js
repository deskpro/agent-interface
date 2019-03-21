const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const { MarkdownBlock } = CompLibrary; /* Used to read markdown */
const { Container } = CompLibrary;
const { GridBlock } = CompLibrary;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);
function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
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
  target: "_self"
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
    const language = this.props.language || "";
    return (
      <div className="dp-Template">
        <div className="dp-UserOverlay">
          <div className="dp-OverlayWrapp">
            <div className="dp-UserContainer dp-UserTitleInfo">
              <div className="dp-UserTabName">
                <div className="dp-UserInfo">
                  <span className="dp-Icon dp-Avatar">
                    <img
                      src="/agent-interface/style/img/docs/avatar.png"
                      className="dp-IconAvatar"
                      alt=""
                    />
                  </span>
                  <span className="dp-UserNameId">
                    <span className="dp-UserName"> Zack Prudent </span>
                    <span className="dp-UserId"> #83995 </span>
                  </span>
                </div>
                <div>
                  <span className="dp-Icon dp-IconUserArrow" />
                  <span className="dp-Icon dp-IconCloseGrey" />
                </div>
              </div>
            </div>
            <div className="dp-UserContainer dp-BrandsInfo">
              <div className="dpApps-AppPanel">
                <div className="dpApps-AppTabs is-horizontal">
                  <div className="dpApps-ButtonTabs--wrap">
                    <button className="dpApps-ButtonTabs is-selected">
                      <span className="dpApps-IconHamburger" />
                    </button>
                    <button className="dpApps-ButtonTabs">
                      <img
                        className="dpApps-ButtonsImg"
                        src="/agent-interface/style/img/docs/jira-logo.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <button className="dpApps-ButtonTabs ButtonTabs-arrow">
                    <button className="dpApps-ButtonTabs ButtonTabs-arrow dp-DropMenuJs">
                      <i className="dpApps-IconArrow iconArrow--left" />
                    </button>
                  </button>
                </div>
                <div className="dpApps-AppPanelBody">
                  <div className="dpApps-AppFrame">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/trello-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">Trello</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                    <section className="dpApps-AppBody dpApps-Section">
                      <div className="dpApps-Level">
                        <div className="dpApps-LevelLeft">
                          <span className="dpApps-AppBodyTitle">
                            Linked cards
                          </span>
                        </div>
                        <div className="dpApps-ActionList dpApps-LevelRight">
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconSearch" />
                            <span className="dpApps-ActionListLabel">Find</span>
                          </a>
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconPlus" />
                            <span className="dpApps-ActionListLabel">
                              Create
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="dpApps-AppBodyItem">
                        <div className="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                          <i className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/trello-logo.svg"
                              alt=""
                            />
                          </i>
                          <span className="dpApps-LevelItemTitle">
                            Blog calender
                          </span>
                          <div className="dpApps-AppBodySetting">
                            <i className="dpApps-IconSettings" />
                            <div className="dpApps-AppSettingDropdown">
                              <div className="dpApps-AppSettingItem">
                                <i className="dpApps-IconOpen" />
                                <span className="dpApps-AppSettingItem--text">
                                  Open
                                </span>
                              </div>
                              <div className="dpApps-AppSettingItem">
                                <i className="dpApps-IconUnlink" />
                                <span className="dpApps-AppSettingItem--text">
                                  Unlink
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dpApps-AppBodyItemRow dpApps-Level">
                          <div className="dpApps-AppBodyContent dpApps-LevelLeft">
                            <span>In Planning</span>
                            <span className="dpApps-AppBodySeparator"> | </span>
                            <span>Linked 12/06/2018</span>
                          </div>
                          <div className="dpApps-LevelRight">
                            <i className="dpApps-Icon dpApps-Icon--Round">
                              <img
                                src="/agent-interface/style/img/docs/AppBodyIcon.jpg"
                                alt=""
                              />
                            </i>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="dpApps-AppFrame">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/youtrack-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">You Track</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dpApps-AppFrame is-colapsed">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">Mailchimp</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                    <section className="dpApps-AppBody dpApps-Section">
                      <div className="dpApps-Level">
                        <div className="dpApps-LevelLeft">
                          <span className="dpApps-AppBodyTitle">
                            Linked issues
                          </span>
                        </div>
                        <div className="dpApps-ActionList dpApps-LevelRight">
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconSearch" />
                            <span className="dpApps-ActionListLabel">Find</span>
                          </a>
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconPlus" />
                            <span className="dpApps-ActionListLabel">
                              Create
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="dpApps-AppBodyItem">
                        <div className="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                          <i className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                              alt=""
                            />
                          </i>
                          <span className="dpApps-LevelItemTitle">
                            #dpApps-1170-symfony 4/p lorem ipsum
                          </span>
                        </div>
                        <div className="dpApps-AppBodyItemRow dpApps-Level">
                          <div className="dpApps-AppBodyContent dpApps-LevelLeft">
                            <span>Linked 12/06/2018</span>
                          </div>
                          <div className="dpApps-LevelRight">
                            <i className="dpApps-Icon dpApps-Icon--Round">
                              <img
                                src="/agent-interface/style/img/docs/AppBodyIcon.jpg"
                                alt=""
                              />
                            </i>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="dpApps-AddApp">
                    <div className="dpApps-Level">
                      <a href="" className="dpApps-LevelLeft">
                        <i className="dpApps-IconPlus" />
                        <span className="dpApps-AddApp-text">Add an app</span>
                      </a>
                      <a href="" className="dpApps-LevelRight">
                        <i className="dpApps-IconClose" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="dp-LeftSidebar">
                <li>
                  <button className="dpApps-ButtonTabs ButtonTabs-arrow dp-DropMenuJs">
                    <i className="dpApps-IconArrow iconArrow--right" />
                  </button>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/trello-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/youtrack-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/jira-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/salesforce-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
              </ul>
              <div className="dp-OverlayContent">
                <div className="dp-TitleRow">
                  <span className="dp-UserInfo">
                    <span className="dp-Icon dp-Avatar dp-InfoItem">
                      <img
                        src="/agent-interface/style/img/docs/avatar.png"
                        className="dp-IconAvatar"
                        alt=""
                      />
                    </span>
                    <span className="dp-InfoItem dp-Tag">#83995</span>
                    <span className="dp-InfoItem dp-UserName">
                      Zack Prudent
                    </span>
                  </span>

                  <span>
                    <span className="dp-Icon dp-IconCloseBlue dp-DropMenuJs" />
                  </span>
                </div>
                <div className="dp-Label">
                  <div className="dp-LabelItem dp-LabelTitle">Labels:</div>
                  <div className="dp-LabelItem dp-Tag Tag--close Tag--purple">
                    Vip
                    <span className="dp-iconClose" />
                  </div>
                  <div className="dp-LabelItem dp-Icon dp-add_tab" />
                </div>
                <ul className="dp-MenuBarList">
                  <li className="dp-MenuBarItem">
                    <span className="dp-Icon dp-IconCloud" />
                    <span className="dp-Title">
                      Cloud
                      <span className="dp-Arrow" />
                    </span>
                  </li>
                  <li className="dp-MenuBarItem dp-redLightColor">
                    <span className="dp-Icon dp-billing" />
                    <span className="dp-Title">
                      Billing
                      <span className="dp-Arrow" />
                    </span>
                  </li>
                  <li className="dp-MenuBarItem dp-greenColor">
                    <span className="dp-Icon dp-liscense" />
                    <span className="dp-Title">
                      License
                      <span className="dp-Arrow" />
                    </span>
                  </li>
                </ul>
                <div className="dp-TabContainer">
                  <div className="dp-Tabs">
                    <ul className="dp-TabItesm">
                      <li className="dp-TabItem is-active"> Tickets </li>
                      <li className="dp-TabItem"> Activity stream </li>
                      <li className="dp-TabItem"> User groups </li>
                      <li className="dp-TabItem"> Brands </li>
                    </ul>
                  </div>
                </div>
                <ul className="dp-TicketsInfo">
                  <li className="dp-TicketsInfoItem dp-TicketsInfoTitle is-active">
                    <span className="dp-idItem">ID</span>
                    <span className="dp-SubjectItem">SUBJECT</span>
                    <span className="dp-StatusItem dp-MenuBarItem">
                      STATUS & URGENCY
                      <span className="dp-Arrow" />
                    </span>
                  </li>
                  <li className="dp-TicketsOpen">
                    <ul>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#83995</span>
                        <span className="dp-SubjectItem">
                          New agent questions
                        </span>
                        <span className="dp-StatusItem dp-Orange">
                          Awaiting agent <span className="dp-qt">4</span>
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#74562</span>
                        <span className="dp-SubjectItem">Translations</span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#63331</span>
                        <span className="dp-SubjectItem">ASP Licensing</span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#83995</span>
                        <span className="dp-SubjectItem">Ver5 Upgrade</span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#74562</span>
                        <span className="dp-SubjectItem">Your Plan</span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#63331</span>
                        <span className="dp-SubjectItem">New feature idea</span>
                        <span className="dp-StatusItem dp-Green">Resolve</span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#83995</span>
                        <span className="dp-SubjectItem">
                          Issue creating multiple tickets
                        </span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                      <li className="dp-TicketsInfoItem">
                        <span className="dp-idItem">#74562</span>
                        <span className="dp-SubjectItem">
                          FW: DeskPRO error
                        </span>
                        <span className="dp-StatusItem dp-Green">
                          Awaiting user
                          <span className="dp-Badge Badge--empty" />
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="dp-Files">
                  Notes
                  <span className="dp-LabelItem dp-Icon dp-add_tab" />
                </div>
                <div className="dp-TicketMessage">
                  <div className="dp-MessageContainer dp-ColorContainer">
                    <div className="dp-MessageHeader">
                      <div className="dp-Left">
                        <div className="dp-title-item dp-optical">
                          <div className="dp-UserAvatarName">
                            <span className="dp-Badge Badge--empty dp-DarkBadge" />
                            <span>Harry Krimbo</span>
                          </div>
                        </div>
                      </div>
                      <div className="dp-Right">
                        <div className="dp-Time">03/11/2016 at 09.58am</div>
                        <a href="#" className="dp-Icon dp-IconDelete" />
                      </div>
                    </div>
                    <div className="dp-MessageTitle">
                      <p className="dp-Type dp-Orange" />
                    </div>
                    <div className="dp-MessageBody">
                      <div className="Content">
                        <p className="dp-txt">
                          Zack recently had some trouble setting up one of his
                          email address. He was quite frustrated so I suggested
                          he call us next time if he is having problems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dp-TicketMessage">
                  <div className="dp-MessageContainer dp-ColorContainer">
                    <div className="dp-MessageHeader">
                      <div className="dp-Left">
                        <div className="dp-title-item dp-optical">
                          <div className="dp-UserAvatarName">
                            <span className="dp-Badge Badge--empty dp-DarkBadge" />
                            <span>Chris Padfield</span>
                          </div>
                        </div>
                      </div>
                      <div className="dp-Right">
                        <div className="dp-Time">03/11/2016 at 09.58am</div>
                        <a href="#" className="dp-Icon dp-IconDelete" />
                      </div>
                    </div>
                    <div className="dp-MessageTitle">
                      <p className="dp-Type dp-Orange" />
                    </div>
                    <div className="dp-MessageBody">
                      <div className="Content">
                        <p className="dp-txt">
                          I think Tech Company are planning to add several more
                          agents in the new year, it’s probably worth reaching
                          out to Zack closer to the time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dp-Files">
                  Files
                  <span className="dp-LabelItem dp-Icon dp-add_tab" />
                </div>
                <div className="dp-FilesList">
                  <div className="dp-FilesInfo">
                    <div className="dp-LeftInfo">
                      <span className="dp-TranslatItem">Translations.png</span>
                      <span className="dp-ExtItem">250 KB</span>
                    </div>
                    <div className="dp-RightInfo">
                      <span className="dp-DeleteItem">
                        Delete
                        <span className="dp-Arrow" />
                      </span>
                      <span className="dp-EditItem">
                        Edit
                        <span className="dp-Arrow" />
                      </span>
                    </div>
                  </div>
                  <div className="dp-FilesInfo">
                    <div className="dp-LeftInfo">
                      <span className="dp-TranslatItem">Plan.png</span>
                      <span className="dp-ExtItem">456 KB</span>
                    </div>
                    <div className="dp-RightInfo">
                      <span className="dp-DeleteItem">
                        Delete
                        <span className="dp-Arrow" />
                      </span>
                      <span className="dp-EditItem">
                        Edit
                        <span className="dp-Arrow" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dp-TemplateLeftCol">
          <ul className="dp-ModuleNav">
            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-tickets" href="#" />
              <span className="dp-IconTooltip">Tickets</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-chats" href="#" />
              <span className="dp-IconTooltip">Chats</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-crm" href="#" />
              <span className="dp-IconTooltip">CRM</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-feedback" href="#" />
              <span className="dp-IconTooltip">Feedback</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-publish" href="#" />
              <span className="dp-IconTooltip">Publish</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-icontasks" href="#" />
              <span className="dp-IconTooltip">Tasks</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-reports" href="#" />
              <span className="dp-IconTooltip">Reports</span>
            </li>

            <li className="dp-ModuleNavList dp-DropMenuJs">
              <a className="dp-Icon dp-admin" href="#" />
              <span className="dp-IconTooltip">Admin</span>
            </li>

            <li className="dp-ModuleNavList is-borderBottom dp-DropMenuJs">
              <a className="dp-Icon dp-billing_money" href="#" />
              <span className="dp-IconTooltip">Billing</span>
            </li>

            <li className="dp-ModuleNavList dp-integration dp-DropMenuJs">
              <a className="dp-Icon dp-portal" href="#" />
              <span className="dp-IconTooltip">
                <span className="dp-TitleTooltip"> Portal </span>
                <ul className="dp-AccountList">
                  <li className="dp-AccountItem is-active">
                    <a href="#" className="dp-Icon-Title dp-raven">
                      <span className="dp-Icon dp-IconPlane" />
                      <span>
                        Raven Paper
                        <span className="dp-BuyNow">
                          support.ravenpaper.com
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="dp-AccountItem">
                    <a href="#" className="dp-Icon-Title dp-raven">
                      <span className="dp-Icon dp-IconPlaneOrange" />
                      <span>
                        Raven Paper Crafts
                        <span className="dp-BuyNow">
                          support.ravenpapercrafts.com
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="dp-AccountItem">
                    <a href="#" className="dp-Icon-Title dp-raven">
                      <span className="dp-Icon dp-IconPlaneViolet" />
                      <span>
                        <span>
                          RP Europe
                          <span className="dp-BuyNow">
                            support.ravenpaper.com
                          </span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
        <div className="dp-TemplateMainColl">
          <div className="dp-TopActionRow">
            <div className="dp-TopActionRowLeft">
              <div className="dp-Search">
                <form>
                  <button type="submit" className="dp-Icon dp-find" />
                  <input
                    type=""
                    placeholder="Search ..."
                    className="dp-DropMenuJs"
                  />
                </form>
                <div className="dp-IconSection">
                  <ul className="dp-IconPanelList">
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-history" />
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Badge Badge--empty">
                        <span className="dp-Badge dp-red">3</span>
                        <span className="dp-Badge dp-green" />
                      </span>
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Badge Badge--empty">
                        <span className="dp-Badge dp-green" />
                      </span>
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Badge Badge--empty">
                        <span className="dp-Badge dp-red">1</span>
                        <span className="dp-Badge dp-green" />
                      </span>
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-add_im" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dp-TopActionRowRight">
              <div className="dp-ControlPanel">
                <div className="dp-IconSection">
                  <ul className="dp-IconPanelList">
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-notifications" />
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-voice--green" />
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-chat--green" />
                    </li>
                    <li className="dp-MenuBarItem">
                      <span className="dp-Icon dp-Avatar">
                        <img
                          src="/agent-interface/style/img/docs/avatar.png"
                          className="dp-IconAvatar"
                          alt=""
                        />
                      </span>
                      <span className="dp-Arrow" />
                    </li>
                    <li className="dp-MenuBarItem dp-DropMenuJs">
                      <span className="dp-Icon dp-IconPlane dp-ActionDropDown" />
                      <span className="dp-Arrow" />
                      <div className="dp-YourAccount">
                        <div className="dp-AccountWrap">
                          <ul className="dp-AccountList">
                            <li className="dp-AccountItem dp-AccountTitle">
                              Your account
                            </li>
                            <li className="dp-AccountItem is-active">
                              <span className="dp-Icon-Title dp-raven">
                                <span className="dp-Icon dp-IconPlane" />
                                Raven Paper
                              </span>
                              <span className="dp-Icon dp-IconTick" />
                            </li>
                            <li className="dp-AccountItem">
                              <span className="dp-Icon-Title dp-raven">
                                <span className="dp-Icon dp-IconPlaneOrange" />
                                Raven Paper Crafts
                              </span>
                            </li>
                            <li className="dp-AccountItem">
                              <span className="dp-Icon-Title dp-raven">
                                <span className="dp-Icon dp-IconPlaneViolet" />
                                <span>
                                  RP Europe (Demo)
                                  <span className="dp-BuyNow">
                                    12 days left | Buy now
                                  </span>
                                </span>
                              </span>
                            </li>
                            <li className="dp-AccountItem">
                              <span className="dp-Icon-Title">
                                <span className="dp-Icon dp-add_tab" />
                                Add new
                              </span>
                            </li>
                            <li className="dp-AccountItem">
                              <span className="dp-Icon-Title">
                                <span className="dp-Icon dp-IconNoteGray" />
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

          <div className="dp-TemplateMainContent">
            <div className="dp-TemplateMainContentLeft">
              <div className="dp-Tickets">
                <div className="dp-dropdownContainer">
                  <div className="dp-Title">
                    <div className="dp-TitleName dp-DropMenuJs">
                      <span className="dp-Icon dp-menu" />
                      All tickets <span className="dp-qt">(90)</span>
                      <span className="dp-Icon dp-iconArrowDown" />
                    </div>
                    <div className="dp-TicketsThumb">
                      <span className="dp-Icon dp-list_view is-active" />
                      <span className="dp-Icon dp-table_view" />
                      <span className="dp-Icon dp-kanban_view" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="dp-TicketMenu">
                <li className="dp-TicketMenuItem dp-MenuBarItem is-active dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>Awaiting agent</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          My tickets
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Tickets I follow
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Unassigned tickets
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          All tickets
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">90</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>Filters</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>Saved Searches</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>Problems & incidents (2)</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>Labels</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dp-TicketMenuItem dp-MenuBarItem dp-DropMenuJs">
                  <span className="dp-TitleMenu">
                    <span>My stars (3)</span>
                    <span className="dp-Arrow" />
                  </span>
                  <ul className="dp-SubMenu">
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Lorem ipsum
                          <span className="dp-Icon dp-IconAgent" />
                        </span>{" "}
                        <span className="dp-SubNum">0</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="dp-FilterControlsList">
                <li className="dp-FilterControlsItem">
                  <span className="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input
                      type="checkbox"
                      className="dp-ControlInput"
                      id="customCheckbox13"
                    />
                    <label htmlFor="customCheckbox13" />
                  </span>
                </li>
                <li className="dp-FilterControlsItem">
                  <span className="dp-ItemRow">
                    <span className="dp-Title">Order By</span>
                  </span>
                  <span className="dp-ItemRow">
                    <select className="dp-Select">
                      <option>Department & Urgency</option>
                      <option>Department & Urgency 2</option>
                      <option>Department & Urgency 3</option>
                    </select>
                  </span>
                </li>
                <li className="dp-FilterControlsItem">
                  <span className="dp-ItemRow">
                    <span className="dp-Title">FACETING BY</span>
                  </span>
                  <span className="dp-ItemRow">
                    <select className="dp-Select">
                      <option>2 Agents, 2 Departments</option>
                      <option>3 Agents, 3 Departments</option>
                      <option>4 Agents, 4 Departments</option>
                    </select>
                  </span>
                </li>
                <li className="dp-FilterControlsItem">
                  <span className="dp-Icon dp-iconEye" />
                </li>
                <li className="dp-FilterControlsItem">
                  <span className="dp-Icon dp-iconSetting" />
                </li>
              </ul>
              <form className="">
                <ul className="dp-FilterResultList">
                  <li className="dp-FilterResultTitle">
                    <span>Sales</span>
                  </li>

                  <li className="dp-FilterResultItem is-active">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox1"
                          defaultChecked
                        />
                        <label htmlFor="customCheckbox1">SSO Information</label>
                        <span className="dp-Icon dp-iconStar" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconRocket" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--red">10</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Kenneth James{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              kenneth@windfarms.loremipsum
                            </span>
                            &gt;
                          </span>
                          Windfarms Windfarms Windfarms Windfarms Windfarms
                          Windfarms Windfarms Windfarms Windfarms
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>12 hr 30 min</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox2"
                        />
                        <label htmlFor="customCheckbox2">
                          Portal disabled landing message
                        </label>
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconBug" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Circle dp-iconClock" />
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Toby Falkirk{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              t.falkirk@rambler.com
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span className="dp-Tag Tag--small Tag--pink">
                          Failed
                        </span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox3"
                        />
                        <label htmlFor="customCheckbox3">
                          Inventory component
                        </label>
                        <span className="dp-Icon dp-iconStarGreen" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconRocket" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--redLight">9</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Mark Jarvis{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              mjarvis@econorob.nl{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span className="dp-Tag Tag--small Tag--pink">
                          3 hours
                        </span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem" id="elem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox4"
                        />
                        <label htmlFor="customCheckbox4">
                          Allow anyone to email support
                        </label>
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconUserAvatar" />
                        <span className="dp-Badge Badge--redMin" />
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Kenneth James{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              kenneth@windfarms.com{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>2 hr 16 min</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox5"
                        />
                        <label htmlFor="customCheckbox5">
                          AW: Need some help?
                        </label>
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconLock" />
                        <span className="dp-Circle dp-iconMln" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--redLight">9</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Toby Falkirk{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              t.falkirk@rambling.com{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>12 hr 43 min</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox6"
                        />
                        <label htmlFor="customCheckbox6">
                          SSO working well with Safari and IE Lorem ipsum
                        </label>
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconMln" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--orangeLight">7</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Mark Jarvis{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              mjarvis@econorob.nl{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span className="dp-Tag Tag--small Tag--orange">
                          10.5 hours
                        </span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox7"
                        />
                        <label htmlFor="customCheckbox7">
                          Enjoying your helpdesk?
                        </label>
                        <span className="dp-Icon dp-iconStar" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconMln" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--yellowMin" />
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Kenneth James{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              kenneth@windfarms.com{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>43 min</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox8"
                        />
                        <label htmlFor="customCheckbox8">Product enquiry</label>
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconMln" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--yellow">6</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Vijay Singh{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              singh.v@leafywifi.com{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>3 days</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultTitle">
                    <span>Support</span>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox9"
                        />
                        <label htmlFor="customCheckbox9">
                          Inventory component
                        </label>
                        <span className="dp-Icon dp-iconStarGreen" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconRocket" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--redLight">9</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Mark Jarvis{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              mjarvis@econorob.nl{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>12 hr 43 min</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow dp-JustifyStart">
                      <span className="dp-UserVal">
                        Department:{" "}
                        <span className="dp-ItemValue">Support</span>
                      </span>
                      <span className="dp-UserVal">
                        Language: <span className="dp-ItemValue">Italiano</span>
                      </span>
                      <span className="dp-UserVal">
                        Last reply:{" "}
                        <span className="dp-ItemValue">9 weeks ago</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox10"
                        />
                        <label htmlFor="customCheckbox10">
                          Enjoying your helpdesk?
                        </label>
                        <span className="dp-Icon dp-iconStar" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconMln" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--yellow">6</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Kenneth James{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              kenneth@windfarms.com{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>4 weeks</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow dp-JustifyStart">
                      <span className="dp-UserVal">
                        Department: <span className="dp-ItemValue">Sales</span>
                      </span>
                      <span className="dp-UserVal">
                        Language:{" "}
                        <span className="dp-ItemValue">English (US)</span>
                      </span>
                      <span className="dp-UserVal">
                        Last reply:{" "}
                        <span className="dp-ItemValue">5 months ago</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dp-FilterResultItem">
                    <span className="dp-ItemRow">
                      <span className="dp-CustomCheckbox">
                        <input
                          type="checkbox"
                          className="dp-ControlInput"
                          id="customCheckbox11"
                        />
                        <label htmlFor="customCheckbox11">
                          Inventory component
                        </label>
                        <span className="dp-Icon dp-iconStarGreen" />
                      </span>
                      <span className="dp-IconGroup">
                        <span className="dp-Circle dp-iconRocket" />
                        <span className="dp-Badge Badge--empty" />
                        <span className="dp-Badge Badge--redLight">9</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow">
                      <span className="dp-UserInfo">
                        <span className="dp-Icon dp-iconUserAvatar" />
                        <span className="dp-UserName">
                          Mark Jarvis{" "}
                          <span className="dp-UserEmail">
                            &lt;
                            <span className="dp-UserEmailItem">
                              mjarvis@econorob.nl{" "}
                            </span>
                            &gt;{" "}
                          </span>{" "}
                        </span>
                      </span>
                      <span className="dp-TimeStatus">
                        <span>4 weeks</span>
                      </span>
                    </span>
                    <span className="dp-ItemRow dp-JustifyStart">
                      <span className="dp-Tag Tag--disabled">Custom work</span>
                      <span className="dp-Tag Tag--disabled">
                        Report back on bug fix
                      </span>
                      <span className="dp-Tag Tag--purple">VIP</span>
                    </span>
                    <span className="dp-ItemRow dp-JustifyStart">
                      <span className="dp-UserVal">
                        Department:{" "}
                        <span className="dp-ItemValue">Support</span>
                      </span>
                      <span className="dp-UserVal">
                        Language: <span className="dp-ItemValue">Italiano</span>
                      </span>
                      <span className="dp-UserVal">
                        Last reply:{" "}
                        <span className="dp-ItemValue">9 weeks ago</span>
                      </span>
                    </span>
                    <ul className="dp-FilterResultMenu dp-ContextMenu">
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          me
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assign to{" "}
                        <a href="#" className="dp-listLink">
                          my team
                        </a>{" "}
                        or <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        Status <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Julien Ducro
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bobby Steiner
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Urgency <span className="dp-Arrow" />
                        <ul className="dp-SubContextMenu dp-ContextMenu">
                          <li>
                            <form>
                              <div className="dp-SearchForm">
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" className="dp-SearchInput" />
                              </div>
                            </form>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Bob Cooper
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dp-listItem">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Lightbody
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dp-DropdownDivider" />
                      <li>
                        <a href="#" className="dp-listItem">
                          Place on hold
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Lock
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dp-listItem">
                          Unlock
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </form>

              <div className="dp-SearchSnippets dp-MainSnippets">
                <div className="dp-SearchSnippetsWrapp">
                  <div className="dp-Search">
                    <form className="dp-FindForm">
                      <button type="submit" className="dp-Icon dp-find" />
                      <input type="" placeholder="Search ..." />
                    </form>
                    <div>
                      <span className="dp-Icon dp-IconCloseBlue dp-DropMenuJs" />
                    </div>
                  </div>

                  <ul className="dp-SnippetsList">
                    <li className="dp-SnippetItem dp-TitleItem">
                      <span className="dp-SnippetsTitle">Snippets (15)</span>
                      <span className="dp-Icon dp-IconAgent" />
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Admin manual<span className="dp-Tag">%admin%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        AGENT manual<span className="dp-Tag">%agent%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        API docs<span className="dp-Tag">%api%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Price Quote<span className="dp-Tag">%price%</span>
                      </span>
                      <span />
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Delete agent
                        <span className="dp-Tag">%deleteagent%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-SP" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        SSL for custom Portal/Chat
                        <span className="dp-Tag">%SSL%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Where is data hosted?
                        <span className="dp-Tag">%datahost%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Admin manual<span className="dp-Tag">%admin%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Agent manual<span className="dp-Tag">%agent%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Api docs<span className="dp-Tag">%api%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-SP" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        CRM related docs<span className="dp-Tag">%APICRM%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Developer manual<span className="dp-Tag">%devm%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Delete agent
                        <span className="dp-Tag">%deleteagent%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        SSL for custom Portal/Chat
                        <span className="dp-Tag">%SSL%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-SP" />
                      </span>
                    </li>
                    <li className="dp-SnippetItem">
                      <span className="">
                        Where is data hosted?
                        <span className="dp-Tag">%datahost%</span>
                      </span>
                      <span>
                        <span className="dp-Icon dp-icon-UK" />
                        <span className="dp-Icon dp-icon-SP" />
                        <span className="dp-Icon dp-icon-GE" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dp-TemplateMainContentRight">
              <ul className="dp-LeftSidebar">
                <li>
                  <button className="dpApps-ButtonTabs ButtonTabs-arrow">
                    <i className="dpApps-IconArrow iconArrow--left" />
                  </button>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/trello-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/youtrack-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/jira-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
                <li className="dp-BarIcon-wrap">
                  <span className="dpApps-Icon">
                    <img
                      src="/agent-interface/style/img/docs/salesforce-logo.svg"
                      alt=""
                    />
                  </span>
                </li>
              </ul>
              <div className="dpApps-AppPanel">
                <div className="dpApps-AppTabs is-horizontal">
                  <div className="dpApps-ButtonTabs--wrap">
                    <button className="dpApps-ButtonTabs is-selected">
                      <span className="dpApps-IconHamburger" />
                    </button>
                    <button className="dpApps-ButtonTabs">
                      <img
                        className="dpApps-ButtonsImg"
                        src="/agent-interface/style/img/docs/jira-logo.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <button className="dpApps-ButtonTabs ButtonTabs-arrow">
                    <i className="dpApps-IconArrow iconArrow--left" />
                  </button>
                </div>
                <div className="dpApps-AppPanelBody">
                  <div className="dpApps-AppFrame">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/trello-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">Trello</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                    <section className="dpApps-AppBody dpApps-Section">
                      <div className="dpApps-Level">
                        <div className="dpApps-LevelLeft">
                          <span className="dpApps-AppBodyTitle">
                            Linked cards
                          </span>
                        </div>
                        <div className="dpApps-ActionList dpApps-LevelRight">
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconSearch" />
                            <span className="dpApps-ActionListLabel">Find</span>
                          </a>
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconPlus" />
                            <span className="dpApps-ActionListLabel">
                              Create
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="dpApps-AppBodyItem">
                        <div className="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                          <i className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/trello-logo.svg"
                              alt=""
                            />
                          </i>
                          <span className="dpApps-LevelItemTitle">
                            Blog calender
                          </span>
                          <div className="dpApps-AppBodySetting">
                            <i className="dpApps-IconSettings" />
                            <div className="dpApps-AppSettingDropdown">
                              <div className="dpApps-AppSettingItem">
                                <i className="dpApps-IconOpen" />
                                <span className="dpApps-AppSettingItem--text">
                                  Open
                                </span>
                              </div>
                              <div className="dpApps-AppSettingItem">
                                <i className="dpApps-IconUnlink" />
                                <span className="dpApps-AppSettingItem--text">
                                  Unlink
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dpApps-AppBodyItemRow dpApps-Level">
                          <div className="dpApps-AppBodyContent dpApps-LevelLeft">
                            <span>In Planning</span>
                            <span className="dpApps-AppBodySeparator"> | </span>
                            <span>Linked 12/06/2018</span>
                          </div>
                          <div className="dpApps-LevelRight">
                            <i className="dpApps-Icon dpApps-Icon--Round">
                              <img
                                src="/agent-interface/style/img/docs/AppBodyIcon.jpg"
                                alt=""
                              />
                            </i>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="dpApps-AppFrame">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/youtrack-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">You Track</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dpApps-AppFrame is-colapsed">
                    <div className="dpApps-AppBar dpApps-Level">
                      <div className="dpApps-LevelLeft">
                        <div className="dpApps-AppBarIcon-wrap">
                          <div className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <span className="dpApps-Title">Mailchimp</span>
                      </div>
                      <div className="dpApps-LevelRight">
                        <a
                          href=""
                          className="dpApps-ActionListIcon dpApps-Icon"
                        >
                          <img
                            className="dpApps-AppBarIcon"
                            src="/agent-interface/style/img/docs/refresh-icon.jpg"
                            alt=""
                          />
                        </a>
                        <a href="" className="dpApps-ActionListIcon">
                          <i className="dpApps-IconArrow iconArrow--top" />
                        </a>
                      </div>
                    </div>
                    <section className="dpApps-AppBody dpApps-Section">
                      <div className="dpApps-Level">
                        <div className="dpApps-LevelLeft">
                          <span className="dpApps-AppBodyTitle">
                            Linked issues
                          </span>
                        </div>
                        <div className="dpApps-ActionList dpApps-LevelRight">
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconSearch" />
                            <span className="dpApps-ActionListLabel">Find</span>
                          </a>
                          <a href="" className="dpApps-ActionListItem">
                            <i className="dpApps-IconPlus" />
                            <span className="dpApps-ActionListLabel">
                              Create
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="dpApps-AppBodyItem">
                        <div className="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                          <i className="dpApps-Icon">
                            <img
                              src="/agent-interface/style/img/docs/mailchimp-logo.svg"
                              alt=""
                            />
                          </i>
                          <span className="dpApps-LevelItemTitle">
                            #dpApps-1170-symfony 4/p lorem ipsum
                          </span>
                        </div>
                        <div className="dpApps-AppBodyItemRow dpApps-Level">
                          <div className="dpApps-AppBodyContent dpApps-LevelLeft">
                            <span>Linked 12/06/2018</span>
                          </div>
                          <div className="dpApps-LevelRight">
                            <i className="dpApps-Icon dpApps-Icon--Round">
                              <img
                                src="/agent-interface/style/img/docs/AppBodyIcon.jpg"
                                alt=""
                              />
                            </i>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="dpApps-AddApp">
                    <div className="dpApps-Level">
                      <a href="" className="dpApps-LevelLeft">
                        <i className="dpApps-IconPlus" />
                        <span className="dpApps-AddApp-text">Add an app</span>
                      </a>
                      <a href="" className="dpApps-LevelRight">
                        <i className="dpApps-IconClose" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="dp-TabBarList">
                <li className="dp-AddTabButton">
                  <a className="dp-Icon dp-iconAdd" href="#" />
                </li>
                <li className="dp-TabBarItem dp-DropMenuJs">
                  <a href="#">
                    <span className="dp-Flex">
                      <span className="dp-Icon dp-iconEmail" />
                      <span className="dp-Title">RE: Need some help?</span>
                    </span>
                    <span className="dp-Flex">
                      <span className="dp-Icon dp-Avatar">
                        <img
                          src="/agent-interface/style/img/docs/avatar.png"
                          className="dp-IconAvatar"
                          alt=""
                        />
                      </span>
                      <span className="dp-Subtitle">James Colbert</span>
                    </span>
                    <span className="dp-iconClose" />
                  </a>
                </li>
                <li className="dp-TabBarItem is-active dp-DropMenuJs">
                  <a href="#">
                    <span className="dp-Flex">
                      <span className="dp-Icon dp-iconEmail" />
                      <span className="dp-Title">SSO working well wit...</span>
                    </span>
                    <span className="dp-Flex">
                      <span className="dp-Icon dp-Avatar">
                        <img
                          src="/agent-interface/style/img/docs/avatar.png"
                          className="dp-IconAvatar"
                          alt=""
                        />
                      </span>
                      <span className="dp-Subtitle">Zack Prudent</span>
                    </span>
                    <span className="dp-iconClose" />
                  </a>
                </li>
                <li className="dp-TabBarItem dp-DropMenuJs">
                  <a href="#">
                    <span className="dp-Flex">
                      <span className="dp-Icon dp-iconOrganisation" />
                      <span className="dp-Title">Deskpro</span>
                    </span>
                    <span className="dp-Flex">
                      <span className="dp-Subtitle">Organisation</span>
                    </span>
                    <span className="dp-iconClose" />
                  </a>
                </li>
              </ul>
              <div className="dp-Sso">
                <div className="dp-SsoWrap">
                  <span className="dp-Icon dp-IconStar" />
                  <span className="dp-Tag">#14355</span>
                  <span className="dp-SsoTxt">
                    SSO working well with Safari and IE but issue with Chrome
                    browser
                  </span>
                </div>
              </div>
              <div className="dp-TemplateMainBarContainer">
                <button className="dp-ActionButton dp-DropMenuJs" type="button">
                  <span className="dp-Icon dp-iconRocketBlue" />
                  <span className="dp-Icon dp-iconRocketwhite" />
                  ACTIONS
                </button>
                <ul className="dp-ContextMenu">
                  <li className="dp-disabledItem">
                    <a href="#">
                      <span className="dp-MenuIcon dp-iconLockGray" /> Lock
                      (permission required)
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="dp-MenuIcon dp-iconGrayMin" /> Put ticket
                      on hold
                    </a>
                  </li>
                  <li className="dp-disabledItem">
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconDelete" /> Delete
                      (permission required)
                    </a>
                  </li>
                  <li className="dp-DropdownDivider" />
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconSplit" /> Split
                      message to new ticket
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconMerge" /> Merge
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-iconEmail" /> Create
                      linked ticket
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconLink" /> Link existing
                      ticket
                    </a>
                  </li>
                  <li className="dp-DropdownDivider" />
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconArticle" /> Create new
                      pending article
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconSnippet" /> Create new
                      snippet
                    </a>
                  </li>
                  <li className="dp-DropdownDivider" />
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconPrint" /> Print
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconDownloadPDF" />{" "}
                      Download PDF
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="dp-MenuIcon dp-iconBugGray" />
                      Download Debug File
                    </a>
                  </li>
                  <li className="dp-DropdownDivider" />
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconSpam" /> Spam
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="dp-MenuIcon dp-IconBan" /> Ban
                    </a>
                  </li>
                </ul>
                <div className="dp-TagBar">
                  <span className="dp-Tag Tag--close">
                    Custom work
                    <span className="dp-iconClose" />
                  </span>
                  <span className="dp-Tag Tag--close">
                    Report back on bug fix
                    <span className="dp-iconClose" />
                  </span>
                  <span className="dp-Tag Tag--close Tag--purple">
                    VIP
                    <span className="dp-iconClose" />
                  </span>
                  <span className="dp-Tag dp-TagPlus" />
                </div>
              </div>

              <ul className="dp-MenuBarList">
                <li className="dp-MenuBarItem dp-TasksItem dp--purple dp-DropMenuJs">
                  <span className="dp-Icon dp-tasks dp--purple">
                    <span className="dp-Badge dp-red">10</span>
                  </span>
                  <span className="dp-Title">
                    Tasks
                    <span className="dp-Arrow" />
                  </span>
                </li>
                <li className="dp-MenuBarItem">
                  <span className="dp-Icon dp-billing" />
                  <span className="dp-Title">
                    Billing
                    <span className="dp-Arrow" />
                  </span>
                </li>
                <li className="dp-MenuBarItem">
                  <span className="dp-Icon dp-liscense" />
                  <span className="dp-Title">
                    License
                    <span className="dp-Arrow" />
                  </span>
                </li>
                <li className="dp-MenuBarItem dp-PropertiesItem dp--redLight dp-DropMenuJs">
                  <span className="dp-Icon dp-ticket_properties dp--redLight">
                    <span className="dp-Badge dp-red">5</span>
                  </span>
                  <span className="dp-Title">
                    Tickets Properties
                    <span className="dp-Arrow" />
                  </span>
                </li>

                <div className="dp-Tasks dp-MenuBarIcon">
                  <div className="dp-BarListWrapper">
                    <form>
                      <div className="dp-Actions">
                        <div className="dp-TaskEditor">
                          <textarea
                            name="comment"
                            placeholder="Task description"
                          />
                          <ul className="dp-ActionsItems dp-BackgroundGray">
                            <li className="dp-ActionsItem dp-MenuBarItem">
                              No due date
                              <span className="dp-Arrow" />
                            </li>
                            <li className="dp-ActionsItem dp-MenuBarItem">
                              Private
                              <span className="dp-Arrow" />
                            </li>
                            <li className="dp-ActionsItem dp-MenuBarItem">
                              Me
                              <span className="dp-Arrow" />
                            </li>
                            <li className="dp-ActionsItem">
                              <span className="dp-Tag Tag--small Tag--green">
                                Add
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="dp-FilterResultList">
                        <li className="dp-FilterResultItem">
                          <span className="dp-ItemRow">
                            <span className="dp-CustomCheckbox">
                              <input
                                type="checkbox"
                                className="dp-ControlInput"
                                id="checkboxTask"
                              />
                              <label htmlFor="checkboxTask">
                                Task item description
                              </label>
                            </span>
                          </span>
                          <span className="dp-ItemRow">
                            <ul className="dp-ActionsItems">
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-group" />
                                30/09/2018
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-history" />
                                14:30 PM
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-oranisation" />
                                Infastructure
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-iconUserAvatar" />
                                Me
                                <span className="dp-Arrow" />
                              </li>
                            </ul>
                            <span className="dp-TimeStatus">
                              <span className="dp-Tag Tag--small Tag--pink">
                                Remove
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="dp-FilterResultItem">
                          <span className="dp-ItemRow">
                            <span className="dp-CustomCheckbox">
                              <input
                                type="checkbox"
                                className="dp-ControlInput"
                                id="checkboxTask2"
                              />
                              <label htmlFor="checkboxTask2">
                                Task item description
                              </label>
                            </span>
                          </span>
                          <span className="dp-ItemRow">
                            <ul className="dp-ActionsItems">
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-group" />
                                29/09/2018
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-history" />
                                11:30 PM
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-oranisation" />
                                Marketing
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-iconUserAvatar" />
                                Me
                                <span className="dp-Arrow" />
                              </li>
                            </ul>
                            <span className="dp-TimeStatus">
                              <span className="dp-Tag Tag--small Tag--pink">
                                Remove
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="dp-FilterResultItem">
                          <span className="dp-ItemRow">
                            <span className="dp-CustomCheckbox">
                              <input
                                type="checkbox"
                                className="dp-ControlInput"
                                id="checkboxTask3"
                              />
                              <label htmlFor="checkboxTask3">
                                Task item description
                              </label>
                            </span>
                          </span>
                          <span className="dp-ItemRow">
                            <ul className="dp-ActionsItems">
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-group" />
                                22/09/2018
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-history" />
                                16:00 PM
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-oranisation" />
                                Sales
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-iconUserAvatar" />
                                Me
                                <span className="dp-Arrow" />
                              </li>
                            </ul>
                            <span className="dp-TimeStatus">
                              <span className="dp-Tag Tag--small Tag--pink">
                                Remove
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="dp-FilterResultItem">
                          <span className="dp-ItemRow">
                            <span className="dp-CustomCheckbox">
                              <input
                                type="checkbox"
                                className="dp-ControlInput"
                                id="checkboxTask4"
                              />
                              <label htmlFor="checkboxTask4">
                                Task item description
                              </label>
                            </span>
                          </span>
                          <span className="dp-ItemRow">
                            <ul className="dp-ActionsItems">
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-group" />
                                19/09/2018
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-history" />
                                10:30 PM
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-oranisation" />
                                Infastructure
                                <span className="dp-Arrow" />
                              </li>
                              <li className="dp-ActionsItem dp-MenuBarItem">
                                <span className="dp-Icon dp-iconUserAvatar" />
                                Me
                                <span className="dp-Arrow" />
                              </li>
                            </ul>
                            <span className="dp-TimeStatus">
                              <span className="dp-Tag Tag--small Tag--pink">
                                Remove
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>

                <div className="dp-TicketProperties dp-MenuBarIcon">
                  <div className="dp-BarListWrapper">
                    <div className="dp-PropertyList">
                      <ul className="dp-PropertyTitleList">
                        <li className="dp-TitleListItem">Department</li>
                        <li className="dp-TitleListItem">Product</li>
                        <li className="dp-TitleListItem">Language</li>
                        <li className="dp-TitleListItem">Channel</li>
                        <li className="dp-TitleListItem">
                          Problems and Incidents
                        </li>
                      </ul>
                      <ul className="dp-PropertySubTitleList">
                        <li className="dp-SubTitleListItem">
                          <i className="dp-Icon dp-SupportIcon" />
                          Support
                        </li>
                        <li className="dp-SubTitleListItem">
                          <i className="dp-Icon dp-iconVoice" />
                          Deskpro Cloud
                        </li>
                        <li className="dp-SubTitleListItem">
                          <i className="dp-Icon dp-UKIcon" />
                          English (UK)
                        </li>
                        <li className="dp-SubTitleListItem">
                          <i className="dp-Icon dp-iconVoice" />
                          Voice
                        </li>
                        <li className="dp-SubTitleListItem dp-securityItem dp-DropMenuJs is-active">
                          <i className="dp-Icon dp-iconVoice" />
                          Security Breach
                          <ul className="dp-SecurityDropDown dp-ContextMenu">
                            <li>
                              <a href="#" className="dp-RemoveBtn">
                                Remove
                              </a>
                            </li>
                            <li>
                              <form>
                                <button
                                  type="submit"
                                  className="dp-Icon dp-IconSearch"
                                />
                                <input type="text" />
                              </form>
                            </li>
                            <li>
                              <a href="#">
                                Inability to use iOS app Elasticsearch email
                                indexing
                              </a>
                            </li>
                            <li>
                              <a href="#">Security breach</a>
                            </li>
                            <li className="dp-AddBtn">
                              <a href="#" className="dp-AddNew">
                                Add new
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="dp-LinkShow">
                      {" "}
                      Show empty property (7)
                    </a>
                  </div>
                </div>
              </ul>
              <div className="dp-TemplateInnerContent">
                <div className="dp-TemplateInnerContentLeft">
                  <div className="dp-PageSidebar">
                    <div className="dp-PageWrapper">
                      <div className="dp-SidebarTabs">
                        <ul className="dp-SidebarTabsList">
                          <li className="dp-SidebarTab-item ">
                            <a
                              href="#"
                              className="dp-Icon dp-mass_actions dp--blue"
                            />
                          </li>
                          <li className="dp-SidebarTab-item is-active">
                            <a
                              href="#"
                              className="dp-Icon dp-icon-user dp--blue"
                            />
                          </li>
                          <li className="dp-SidebarTab-item ">
                            <a
                              href="#"
                              className="dp-Icon dp-oranisation dp--blue"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="dp-SidebarWrapper">
                        <div className="dp-SidebarRow">
                          <div className="dp-SidebarSection">
                            <div className="dp-SectionTitle">
                              Organization & user
                            </div>
                            <span className="dp-LineTitle" />
                          </div>
                          <div className="dp-SectionBody-item">
                            <div className="dp-title-item dp-optical">
                              <div className="dp-UserAvatarName">
                                <span className="dp-Badge Badge--empty" />
                                Optical
                              </div>
                            </div>
                          </div>
                          <div className="dp-SectionBody-item dp-DropMenuJs dp-BorderBlue">
                            <p className="dp-title-item">
                              <img
                                src="/agent-interface/style/img/docs/avatar.png"
                                alt=""
                                className="dp-Icon dp-Avatar"
                              />
                              Zack Prudent
                            </p>
                            <p className="dp-Email">
                              zack.prudent@techcompany.com
                            </p>
                            <p className="dp-Phone">
                              <i className="dp-Icon dp-iconPhoneBlue" />
                              <a href="tel:+442035678940">+44 20 356 789 40</a>
                            </p>
                            <p className="dp-OpenResolved">
                              <span className="dp-open">
                                <i className="dp-Icon dp-iconEmailBlue" /> Open:
                                7
                              </span>
                              <span className="dp-resolved">
                                <i className="dp-Icon dp-iconEmail" /> Resolved:
                                24
                              </span>
                            </p>
                          </div>
                          <div className="dp-OrganizationSubtitle">
                            <div>
                              CC's{" "}
                              <a href="#" className="dp-NumLink">
                                (2)
                              </a>
                            </div>{" "}
                            <a href="#" className="dp-BorderLeft">
                              +Add
                            </a>
                          </div>
                          <div className="dp-SectionBody-item">
                            <div className="dp-title-item dp-optical dp-CCs">
                              <div className="dp-UserAvatarName">
                                <span className="dp-Badge Badge--empty" />
                                <span className="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com">
                                  w.pride@techco...
                                </a>
                              </div>
                              <a href="#" className="dp-Icon dp-iconVDots" />
                            </div>
                          </div>
                          <div className="dp-SectionBody-item db-m-0">
                            <div className="dp-title-item dp-optical dp-CCs">
                              <div className="dp-UserAvatarName">
                                <span className="dp-Badge Badge--empty" />
                                <span className="dp-UserName">Bob Cooper</span>
                                <a href="mailto:bob.cooper@techcompany.com">
                                  bob.cooper@tec ...
                                </a>
                              </div>
                              <i className="dp-Icon dp-iconVDots" />
                            </div>
                          </div>
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-SectionTitle">
                              <div className="dp-TitleControls">
                                Ticket properties
                              </div>
                              <span className="dp-LineTitle" />
                              <a href="#" className="dp-Controls">
                                <span className="dp-qt"> +5 </span>
                                <i className="dp-Icon dp-DotsIcon" />
                              </a>
                            </div>
                          </div>
                          <div className="dp-PropertyList">
                            <dl className="dp-TicketList">
                              <dt className="dp-TitleList db-m-0">
                                Department
                              </dt>
                              <dd className="dp-SubTitleList">
                                <i className="dp-Icon dp-SupportIcon" />
                                Support
                              </dd>
                              <dt className="dp-TitleList">Product</dt>
                              <dd className="dp-SubTitleList">Deskpro Cloud</dd>
                              <dt className="dp-TitleList">Language</dt>
                              <dd className="dp-SubTitleList">
                                <i className="dp-Icon dp-UKIcon" />
                                English (UK)
                              </dd>
                              <dt className="dp-TitleList">Channel</dt>
                              <dd className="dp-SubTitleList">
                                <i className="dp-Icon dp-iconVoice" />
                                Voice
                              </dd>
                            </dl>
                          </div>
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-SectionTitle">
                              <div className="dp-TitleControls dp-StatusTimes">
                                Status &amp; times
                              </div>
                              <span className="dp-LineTitle" />
                              <a href="#" className="dp-Controls">
                                <i className="dp-Icon dp-DotsIcon" />
                              </a>
                            </div>
                          </div>
                          <div className="dp-SectionBody">
                            <div className="dp-ButtonWrapper">
                              <button
                                className="dp-ActionButton dp-BorderPink ActionButton--large"
                                type="button"
                              >
                                Awaiting Agent
                              </button>
                              <button
                                className="dp-ActionButton dp-BorderPink dp-Pink"
                                type="button"
                              >
                                10
                              </button>
                            </div>
                            <div className="dp-DataWrapper">
                              <span className="dp-DateItem">
                                <i className="dp-Icon dp-iconCalendar" />2 weeks
                                ago
                              </span>
                              <span className="dp-DateItem">
                                <i className="dp-Icon dp-iconUserTime" />
                                12 hr 43 min
                              </span>
                            </div>
                          </div>
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-SectionTitle">
                              <div className="dp-TitleControls dp-Slas">
                                SLAS
                              </div>
                              <span className="dp-LineTitle" />
                              <a href="#" className="dp-Controls">
                                <i className="dp-Icon dp-DotsIcon" />
                              </a>
                            </div>
                          </div>
                          <div className="dp-SectionBody">
                            <div className="dp-TagItem">
                              <span className="dp-TimeStatus">
                                <span className="dp-Tag Tag--small Tag--pink">
                                  3 hours
                                </span>
                              </span>
                              <span className="dp-TagDescription">
                                Time until resolution
                              </span>
                            </div>
                            <div className="dp-TagItem">
                              <span className="dp-TimeStatus">
                                <span className="dp-Tag Tag--small Tag--orange">
                                  10.5 hours
                                </span>
                              </span>
                              <span className="dp-TagDescription">
                                Time awaiting reply
                              </span>
                            </div>
                          </div>
                          <div className="dp-SidebarSection">
                            <div className="dp-SectionTitle">
                              Agents &amp; team
                            </div>
                            <span className="dp-LineTitle" />
                          </div>
                          <div className="dp-OrganizationSubtitle">
                            <div>AGENT</div>
                            <div>
                              <a href="#">Assign to me</a>
                              <a href="#" className="dp-BorderLeft">
                                Unassign
                              </a>
                            </div>
                          </div>
                          <div className="dp-SectionBody-item">
                            <div className="dp-title-item dp-optical dp-Agent">
                              <div className="dp-UserAvatarName">
                                <span className="dp-Badge Badge--empty" />
                                Chris Pattison
                              </div>
                            </div>
                          </div>
                          <div className="dp-OrganizationSubtitle">
                            <span>TEAM</span>
                            <a href="#">Unassign</a>
                          </div>
                          <div className="dp-SectionBody-item">
                            <div className="dp-title-item dp-optical">
                              <div className="dp-UserAvatarName">
                                2nd Level Support
                              </div>
                            </div>
                          </div>
                          <div className="dp-OrganizationSubtitle">
                            <div>
                              FOLLOWERS{" "}
                              <a href="#" className="dp-NumLink">
                                (2)
                              </a>
                            </div>
                            <div>
                              <a href="#">Add</a>
                              <a href="#" className="dp-BorderLeft">
                                Add me
                              </a>
                            </div>
                          </div>
                          <div className="dp-TagWrapper">
                            <div className="dp-Tag Tag--close">
                              <span className="dp-Badge Badge--empty" />
                              Wendy Pride
                              <span className="dp-iconClose" />
                            </div>
                            <div className="dp-Tag Tag--close">
                              <span className="dp-Badge Badge--empty" />
                              Zack Cooper
                              <span className="dp-iconClose" />
                            </div>
                          </div>
                          <div className="dp-BorderBottom" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dp-PageSidebar dp-UserActivSidebar">
                    <div className="dp-PageWrapper">
                      <div className="dp-SidebarTabs">
                        <ul className="dp-SidebarTabsList">
                          <li className="dp-SidebarTab-item ">
                            <a
                              href="#"
                              className="dp-Icon dp-mass_actions dp--blue"
                            />
                          </li>
                          <li className="dp-SidebarTab-item is-active">
                            <a
                              href="#"
                              className="dp-Icon dp-icon-user dp--white"
                            />
                          </li>
                          <li className="dp-SidebarTab-item ">
                            <a
                              href="#"
                              className="dp-Icon dp-oranisation dp--blue"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="dp-SidebarWrapper">
                        <div className="dp-SidebarRow">
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-SectionTitle">
                              <div className="dp-TitleControls dp-Slas">
                                User contact information
                              </div>
                              <span className="dp-LineTitle" />
                              <a href="#" className="dp-Controls">
                                <i className="dp-Icon dp-DotsIcon" />
                              </a>
                            </div>
                          </div>
                          <div className="dp-SectionBody-item dp-DropMenuJs">
                            <p className="dp-title-item">
                              <img
                                src="/agent-interface/style/img/docs/avatar.png"
                                alt=""
                                className="dp-Icon dp-Avatar"
                              />
                              Zack Prudent
                            </p>
                            <p className="dp-Email">
                              <a href="mailto:zack.prudent@techcompany.com">
                                zack.prudent@techcompany.com
                              </a>
                            </p>
                            <p className="dp-Phone">
                              <i className="dp-Icon dp-iconPhoneBlue" />
                              <a href="tel:+442035678940">+44 20 356 789 40</a>
                            </p>
                            <p className="dp-OpenResolved">
                              <span className="dp-open">
                                <i className="dp-Icon dp-iconEmailBlue" /> Open:
                                7
                              </span>
                              <span className="dp-resolved">
                                <i className="dp-Icon dp-iconEmail" /> Resolved:
                                24
                              </span>
                            </p>
                          </div>
                          <dl className="dp-AddressList">
                            <dt className="dp-TitleList">Website</dt>
                            <dd className="dp-SubTitleList">
                              www.techcompany.com
                            </dd>
                            <dt className="dp-TitleList">Address</dt>
                            <dd className="dp-SubTitleList address">
                              Tech Company Ltd
                              <br />
                              14 Cloud Street
                              <br />
                              London
                              <br />
                              SE1 ONG
                              <br />
                              England
                            </dd>
                            <dt className="dp-TitleList">IM</dt>
                            <dd className="dp-SubTitleList"> - </dd>
                            <dt className="dp-TitleList">Facebook</dt>
                            <dd className="dp-SubTitleList"> - </dd>
                            <dt className="dp-TitleList">Twitter</dt>
                            <dd className="dp-SubTitleList"> - </dd>
                            <dt className="dp-TitleList">LinkedIn</dt>
                            <dd className="dp-SubTitleList"> - </dd>
                          </dl>
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-SectionTitle">
                              <div className="dp-TitleControls dp-Slas">
                                Properties
                              </div>
                              <span className="dp-LineTitle" />
                              <a href="#" className="dp-Controls">
                                <i className="dp-Icon dp-DotsIcon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dp-PageSidebar dp-SearchSnippets">
                    <div className="dp-PageWrapper">
                      <div className="dp-SidebarRow">
                        <div className="dp-SidebarSection dp-SectionControls">
                          <div className="dp-TitleControls">Labels</div>
                        </div>

                        <form className="dp-FindForm">
                          <button type="submit" className="dp-Icon dp-find" />
                          <input type="text" />
                        </form>

                        <ul className="dp-SearchSnippetsList">
                          <li className="dp-LabelItem">
                            <a href="#" className="is-active">
                              Agents (8)
                            </a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#" className="is-active">
                              Desk PRO Cloud (2)
                            </a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Docs (6)</a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Features (20)</a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Feedback (4)</a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#" className="is-active">
                              General (7)
                            </a>
                            <ul className="dp-LabelSubList">
                              <li className="LabelSubItem">
                                <a href="#">Intefrations (1)</a>
                              </li>
                              <li className="LabelSubItem">
                                <a href="#">Post Sales (4)</a>
                              </li>
                              <li className="LabelSubItem">
                                <a href="#" className="is-active">
                                  Reporting (1)
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Intefrations (1)</a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Post Sales (4)</a>
                          </li>
                          <li className="dp-LabelItem">
                            <a href="#">Reporting (1)</a>
                          </li>
                        </ul>

                        <div className="dp-SidebarSection dp-SectionControls">
                          <div className="dp-TitleControls">Mass actions</div>
                        </div>

                        <div className="dp-MassActions">
                          <div className="dp-SelectGroup">
                            <span className="dp-ItemRow dp-DropMenuJs">
                              <span className="dp-Title">Ownership</span>
                              <span className="dp-Icon dp-small_caret" />
                            </span>
                            <span className="dp-ItemRow dp-DropMenuJs">
                              <span className="dp-Title">Everyone</span>
                              <span className="dp-Icon dp-small_caret" />
                            </span>
                          </div>

                          <span className="dp-RowBtn">
                            <a href="#" className="dp-btn">
                              SAVE
                            </a>
                          </span>
                        </div>

                        <div className="dp-NewSnippet">
                          <div className="dp-SidebarSection dp-SectionControls">
                            <div className="dp-TitleControls">New snippet</div>
                          </div>
                          <div className="dp-RowBtn">
                            <a href="#" className="dp-btn dp-DropMenuJs">
                              ADD SNIPPET
                            </a>

                            <div className="dp-SearchSnippets dp-AddSnippets">
                              <div className="dp-ReplyBox">
                                <div className="dp-ReplyWrapper">
                                  <div className="dp-Actions">
                                    <ul className="dp-ActionsItems">
                                      <li className="dp-ActionsItem">lorem</li>
                                      <li className="dp-ActionsItem">lorem</li>
                                      <li className="dp-ActionsItem">lorem</li>
                                      <li className="dp-ActionsItem dp-MenuBarItem">
                                        lorem
                                        <span className="dp-Arrow" />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="dp-AddSnippetsTitle">
                                    Snippet Title
                                  </div>
                                  <textarea className="dp-ReplyEditor">
                                    Snippet Content
                                  </textarea>
                                  <div className="dp-SnippetsDescription">
                                    <div>
                                      Labels <a href="#">ADD</a>
                                    </div>
                                    <div className="dp-SnippetsDescriptionList">
                                      <div className="dp-SnippetsDescriptionItem">
                                        <div>Shortcode</div>
                                        <div className="dp-ActionsItem dp-precent">
                                          <form>
                                            <input type="" />
                                          </form>
                                        </div>
                                      </div>
                                      <div className="dp-SnippetsDescriptionItem">
                                        <div>Ownership</div>
                                        <div className="dp-ActionsItem dp-MenuBarItem">
                                          Everyone
                                          <span className="dp-Arrow" />
                                        </div>
                                      </div>
                                      <div className="dp-SnippetsDescriptionItem">
                                        <div>Visibility</div>
                                        <div className="dp-ActionsItem dp-MenuBarItem">
                                          All departments
                                          <span className="dp-Arrow" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dp-SnippetsDescriptionBtn">
                                    <div className="dp-RowBtn">
                                      <div>
                                        <a href="#" className="dp-btn blue-btn">
                                          PUBLISH
                                        </a>
                                        <a href="#" className="dp-btn">
                                          SAVE AS DRAFT
                                        </a>
                                      </div>
                                      <a href="#" className="dp-btn">
                                        CANCEL
                                      </a>
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
                <div className="dp-TemplateInnerContentRight">
                  <div className="dp-ReplyBox">
                    <div className="dp-ReplyWrapper">
                      <div className="dp-Actions">
                        <ul className="dp-ActionsItems dp-BackgroundGray">
                          <li className="dp-ActionsItem">Reply</li>
                          <li className="dp-ActionsItem">Add Note</li>
                          <li className="dp-ActionsItem">Forward</li>
                          <li className="dp-ActionsItem dp-MenuBarItem">
                            Macros
                            <span className="dp-Arrow" />
                          </li>
                        </ul>
                      </div>
                      <textarea className="dp-ReplyEditor" />
                    </div>
                  </div>
                  <div className="dp-TabContainer">
                    <div className="dp-Tabs">
                      <ul className="dp-TabItesm">
                        <li className="dp-TabItem is-active">
                          {" "}
                          Messages & Notes{" "}
                        </li>
                        <li className="dp-TabItem">Full Log</li>
                      </ul>
                    </div>
                  </div>
                  <div className="dp-user dp-TicketMessage">
                    <div className="dp-MessageContainer">
                      <div className="dp-MessageHeader">
                        <div className="dp-Left">
                          <div className="dp-title-item dp-optical">
                            <div className="dp-UserAvatarName">
                              <span className="dp-Badge Badge--empty" />
                              <span className="">Zach Prudent</span>
                              <a href="mailto:zack.prudent@techcompany.com">
                                <i className="dp-Icon dp-iconEmail" />
                                zack.prudent@techcompany ...
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="dp-Right">
                          <div className="dp-Time">Today at 11:34am</div>
                          <a href="#" className="dp-Icon dp-iconSetting" />
                        </div>
                      </div>
                      <div className="dp-MessageTitle">
                        <p className="dp-Type">User Reply</p>
                      </div>
                      <div className="dp-MessageBody">
                        <div className="Content">
                          <p>Good day Brian,</p>
                          <p>
                            We’ve been having another issue with this version of
                            DeskPro. I’ve been doing some troubleshooting with
                            our SSO partner but no luck so far so I thought it
                            wouldn’t hurt to bounce it off of you. The thing is,
                            we configured both Agent and User modules to use SSO
                            and it was working great for a few days. When I came
                            into the office last week Friday I realized that I
                            wasn’t able to log into the Admin/Agent portals but
                            I was able to log in to the User portal. Upon
                            further investigation, we realized that we weren’t
                            able to log in if the SSO URLs were the same.
                          </p>
                          <p>
                            We tried clearing browser data in Chrome and trying
                            incognito but no luck. Have you ever seen anything
                            like this before?
                          </p>
                          <p>Let me know if anything pops up in your head.</p>
                          Thanks,
                          <br />
                          Zack
                        </div>
                        <a href="#" className="dp-ExpandButton">
                          <span className="dp-dots">&hellip;</span>
                        </a>
                      </div>
                    </div>
                    <div className="dp-MessageContainer dp-ColorContainer">
                      <div className="dp-MessageHeader">
                        <div className="dp-Left">
                          <div className="dp-title-item dp-optical">
                            <div className="dp-UserAvatarName">
                              <span className="dp-Badge Badge--empty dp-DarkBadge" />
                              <span>Harry Krimbo</span>
                            </div>
                          </div>
                        </div>
                        <div className="dp-Right">
                          <div className="dp-Time">03/11/2016 at 09.58am</div>
                          <a href="#" className="dp-Icon dp-iconSetting" />
                        </div>
                      </div>
                      <div className="dp-MessageTitle">
                        <p className="dp-Type dp-Orange">Agent note</p>
                      </div>
                      <div className="dp-MessageBody">
                        <div className="Content">
                          <p className="dp-txt">
                            I’ve asked one of the tech guys to take a look but
                            don’t want to reply until we know the timeframe for
                            a resolution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dp-MessageContainer">
                      <div className="dp-MessageHeader">
                        <div className="dp-Left">
                          <div className="dp-title-item dp-optical">
                            <div className="dp-UserAvatarName">
                              <span className="dp-Badge Badge--empty dp-DarkBadge" />
                              <span className="">Harry Krimbo</span>
                            </div>
                          </div>
                        </div>
                        <div className="dp-Right">
                          <div className="dp-Time">03/11/2016 at 09.58am</div>
                          <a href="#" className="dp-Icon dp-iconSetting" />
                        </div>
                      </div>
                      <div className="dp-MessageTitle">
                        <p className="dp-Type dp-Green">Agent reply</p>
                      </div>
                      <div className="dp-MessageBody">
                        <div className="Content">
                          <p>Hi Zack,</p>
                          <p>
                            I’ve asked one of the tech guys to take a look and
                            find the best sol ...
                          </p>
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
