import React, { Component, useState } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  articles = [
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Could Only Use N-Weapons If...: Russia Amid Ukraine Invasion - NDTV",
      "description": "Kremlin spokesman Dmitry Peskov on Tuesday said Russia would only use nuclear weapons if its very existence were threatened, Tass news agency reported.",
      "url": "https://www.ndtv.com/world-news/russia-would-only-use-nuclear-weapons-if-its-existence-were-threatened-says-kremlin-2837522",
      "urlToImage": "https://c.ndtvimg.com/2022-03/8r3t9fc_ukraine-war_625x300_09_March_22.jpg",
      "publishedAt": "2022-03-22T23:24:00Z",
      "content": "President Putin last month ordered Russia's nuclear forces to be put on high alert.\r\nMoscow: Kremlin spokesman Dmitry Peskov on Tuesday said Russia would only use nuclear weapons if its very existenc… [+824 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "TNN",
      "title": "Petrol, diesel prices up; LPG touches record high - Times of India",
      "description": "India Business News: State-run fuel retailers raised fuel prices across the board on Tuesday, a day after BJP completed selecting chief ministers in all the four states it",
      "url": "https://timesofindia.indiatimes.com/business/india-business/petrol-diesel-prices-up-lpg-touches-record-high/articleshow/90384120.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-90384111,width-1070,height-580,imgsize-47018,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-22T20:10:00Z",
      "content": "Petrol, diesel prices up; LPG touches record high"
      },
      {
      "source": {
      "id": null,
      "name": "Notebookcheck.net"
      },
      "author": "Deirdre O'Donnell",
      "title": "OnePlus will launch six phones between now and the end of September 2022 - Notebookcheck.net",
      "description": "OnePlus is currently linked to the release of multiple new smartphones throughout 2022. Now, an increasingly reliable leaker purports to release a more specific timeline for the launch of each one, starting with the only confirmed model of the bunch and endin…",
      "url": "https://www.notebookcheck.net/OnePlus-will-launch-six-phones-between-now-and-the-end-of-September-2022.609583.0.html",
      "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/op10pro.png",
      "publishedAt": "2022-03-22T19:17:05Z",
      "content": "OnePlus is tipped to release much more hardware in 2022 compared to previousyears. They include at least 1 variation on its flagship smartphone for the year, as well as some additional Nord-series de… [+963 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": null,
      "title": "Firestorm in Bengal over Birbhum arson that killed 8, BJP seeks President’s Rule | Top Points - India Today",
      "description": "At least eight people were charred to death in an arson incident in Bengal's Birbhum on Tuesday. In the aftermath, battle lines are clearly drawn as the BJP demanded President's Rule in the state and the ruling TMC denied all involvement in the incident.",
      "url": "https://www.indiatoday.in/india/story/bengal-birbhum-rampurhat-arson-8-killed-bjp-presidents-rule-mamata-banerjee-tmc-dhankar-top-points-1928290-2022-03-22",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Birbhum_Arson_1200x768_0-647x363.jpeg?xdy3byhQ6oJBHxWrf5cq7EHB7A5EKvlg",
      "publishedAt": "2022-03-22T17:46:32Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT correspondent",
      "title": "Who is Shridhar Patankar, CM Uddhav Thackeray’s relative under ED scanner - Hindustan Times",
      "description": "In the past, Bharatiya Janata Party (BJP) leader Kirit Somaiya had raised questions about Patankar’s investments and businesses. | Mumbai news",
      "url": "https://www.hindustantimes.com/cities/mumbai-news/who-is-shridhar-patankar-cm-uddhav-thackeray-s-relative-under-ed-scanner-101647969931282.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/03/22/1600x900/d3e0b8e6-aa04-11ec-872a-99283e1803a9_1647969921985.jpg",
      "publishedAt": "2022-03-22T17:25:30Z",
      "content": "Despite best attempts to stay out of the limelight, Shridhar Madhav Patankar is in the news after his immovable properties were provisionally attached by the enforcement directorate (ED) on Tuesday. … [+1504 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Rezaul H Laskar",
      "title": "In Modi’s phone call with Boris Johnson, a call to respect Ukraine’s integrity - Hindustan Times",
      "description": "In their phone conversation, Britain’s Prime Minister Boris Johnson and PM Narendra Modi said Russia needs to adhere to the UN Charter, according to a Downing Street spokeswoman. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/in-modi-s-phone-call-with-boris-johnson-a-call-to-respect-ukraine-s-integrity-101647967823011.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/03/22/1600x900/e2aa68dc-a9fe-11ec-91a2-46f8d94c29f3_1647968181939.jpg",
      "publishedAt": "2022-03-22T16:50:22Z",
      "content": "Prime Minister Narendra Modi and his British counterpart Boris Johnson on Tuesday called for Ukraines integrity and territorial sovereignty to be respected and for an immediate end to hostilities.\r\nT… [+3009 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": null,
      "title": "Trade setup for Wednesday: Top 15 things to know before Opening Bell - Moneycontrol",
      "description": "Five stocks - Balrampur Chini Mills, Delta Corp, GNFC, Indiabulls Housing Finance and Sun TV Network - are under the F&O ban for March 23.",
      "url": "https://www.moneycontrol.com/news/business/markets/trade-setup-for-wednesday-top-15-things-to-know-before-opening-bell-170-8262411.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/08/shutterstock_1043121319-1-770x433.jpg",
      "publishedAt": "2022-03-22T16:32:57Z",
      "content": "The market recouped all its previous day's losses and closed at fresh one-month high with more than one percent gains on March 22, following positive global cues.\r\nThe BSE Sensex soared 697 points or… [+9474 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": null,
      "title": "No toll tax within 60 km on highways in next 3 months: Nitin Gadkari - Moneycontrol",
      "description": "Gadkari also noted that the distance between Delhi and Amritsar will be reduced to four hours by end of this year.",
      "url": "https://www.moneycontrol.com/news/india/no-toll-tax-within-60-km-on-highways-in-next-3-months-nitin-gadkari-8262361.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/03/pjimage-8-2-770x433.jpg",
      "publishedAt": "2022-03-22T16:16:30Z",
      "content": "Toll tax would not be levied at collection points that are located within 60 km of one another, said Nitin Gadkari, the Union Minister for Road Transport and Highways, while replying to a discussion … [+1493 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "PTI",
      "title": "All England has given me self-belief to beat big players: Lakshya Sen - Times of India",
      "description": "Badminton News: Making the All England Championships final has given him the self-belief to beat top players but Indian shutter Lakshya Sen on Tuesday said he will ne",
      "url": "https://timesofindia.indiatimes.com/sports/badminton/all-england-has-given-me-self-belief-to-beat-big-players-lakshya-sen/articleshow/90381745.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-90381790,width-1070,height-580,imgsize-27758,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-22T16:15:00Z",
      "content": "Lakshya Sen breaks into world's top 10; Treesa Jolly-Gayatri Gopichand reach career-best ranking in doublesIndian badminton star Lakshya Sen's silver medal winning feat at the All England Badminton C… [+207 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Garena Free Fire Redeem Codes for 22 March released: Here's how to claim rewards - Mint",
      "description": "Free Fire has now upgraded to Garena Free Fire MAX but it has the same website for the redeem codes.",
      "url": "https://www.livemint.com/technology/apps/garena-free-fire-redeem-codes-for-22-march-released-here-s-how-to-claim-rewards-11647964615363.html",
      "urlToImage": "https://images.livemint.com/img/2022/03/22/600x338/3df5e7f6dee326645dd52670bb3745d8jpg_(1)_1645145237039_1645145266087_1645177421714_1647965422435.webp",
      "publishedAt": "2022-03-22T16:12:03Z",
      "content": "For Garena Free Fire addicts, the redeem codes for March 22 have already been released. Garena Free Fire has now upgraded to Garena Free Fire MAX but it has the same website for the redeem codes. Tho… [+903 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Dtnext.in"
      },
      "author": "100010509524078",
      "title": "NASA confirms existence of over 5,000 exoplanets - DTNEXT",
      "description": "The planetary odometer turned on March 21, with the latest batch of 65 exoplanets - planets outside our immediate solar family - added to the NASA Exoplanet Archive.",
      "url": "http://www.dtnext.in/Lifestyle/Technology/2022/03/22212646/1359345/NASA-confirms-existence-of-over-5000-exoplanets.vpf",
      "urlToImage": "https://img.dtnext.in/Articles/2022/Mar/202203222126450313_NASA-confirms-existence-of-over-5000-exoplanets_SECVPF.gif",
      "publishedAt": "2022-03-22T16:11:36Z",
      "content": "The planetary odometer turned on March 21, with the latest batch of 65 exoplanets - planets outside our immediate solar family - added to the NASA Exoplanet Archive.\r\nWashington:US space agency NASA … [+2051 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Kiran Parashar",
      "title": "In backdrop of hijab row, Muslim shopkeepers banned from temple fairs in coastal Karnataka - The Indian Express",
      "description": "After the Karnataka HC had upheld the ban on hijab in educational institutions, many Muslim shopkeepers had downed shutters as a mark of protest.",
      "url": "https://indianexpress.com/article/cities/bangalore/in-backdrop-of-hijab-row-muslim-shopkeepers-banned-from-temple-fairs-in-coastal-karnataka-7831613/",
      "urlToImage": "https://images.indianexpress.com/2022/03/FOcr3wjVQAIAsKA.jpg",
      "publishedAt": "2022-03-22T15:58:35Z",
      "content": "In the backdrop of the row over hijab, which has deepened the religious faultlines, especially in coastal Karnataka, reports emerge of Muslim shopkeepers being banned from local annual fairs.The orga… [+2901 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "WION"
      },
      "author": "WION Web Team",
      "title": "Children`s natural immunity against Covid lasts up to seven months, but vaccines are still important: Study - WION",
      "description": "Children previously infected with COVID-19 have natural circulating antibodies that last at least seven months, according to a new study led by the University of Texas Health Science Center at Houston.",
      "url": "https://www.wionews.com/science/childrens-natural-immunity-against-covid-lasts-up-to-seven-months-but-vaccines-are-still-important-study-464653",
      "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/03/22/249369-stories-8.jpg, according to literature based on adults.\" typeof=\"foaf:Image\" />",
      "publishedAt": "2022-03-22T15:35:21Z",
      "content": "Children previously infected with COVID-19 have natural circulating antibodies that last at least seven months, according to a new study led by the University of Texas Health Science Center at Housto… [+2609 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "AFP",
      "title": "Cause of China jet crash still unknown, as hunt for black boxes continues - Times of India",
      "description": "China News: WUZHOU: Crash investigators on Tuesday said they do not yet know why a China Eastern jet carrying 132 people plunged from sky, with recovery teams sti.",
      "url": "https://timesofindia.indiatimes.com/world/china/cause-of-china-jet-crash-still-unknown-as-hunt-for-black-boxes-continues/articleshow/90380794.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-90380791,width-1070,height-580,imgsize-252994,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-22T14:54:00Z",
      "content": "Cause of China jet crash still unknown, as hunt for black boxes continues"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": null,
      "title": "Ram Charan, Jr NTR, SS Rajamouli and Team RRR reach Varanasi. See pics, videos - India Today",
      "description": "After promoting RRR in Kolkata, Jr NTR, Ram Charan and SS Rajamouli have now arrived in Varanasi. RRR will have a grand release on March 25.",
      "url": "https://www.indiatoday.in/movies/regional-cinema/story/ram-charan-jr-ntr-ss-rajamouli-and-team-rrr-reach-varanasi-see-pics-videos-1928209-2022-03-22",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/RRR_team_SS_Rajamouli__Jr_NTR_-647x363.png?zibqXRkBZ92TsOjyZPCftVMMgCBT5BOt",
      "publishedAt": "2022-03-22T14:52:21Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Shalini Gupta",
      "title": "India rout Bangladesh by 110 runs, stay alive in Women's World Cup 2022 - Hindustan Times",
      "description": "Bhatia leads batting revival before spin punch fells Bangladesh. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/womens-world-cup-2022-yastika-bhatia-sneh-rana-help-india-rout-bangladesh-by-110-runs-keep-semi-final-hopes-alive-101647936145871.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/03/22/1600x900/image_-_2022-03-22T133535.808_1647936348251_1647936355114.jpg",
      "publishedAt": "2022-03-22T14:48:52Z",
      "content": "India recovered from a middle-order collapse that included a first-ball dismissal of skipper Mithali Raj to beat Bangladesh by 110 runs, the big victory margin on Tuesday pushing them to third on the… [+2603 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "Vishesh Roy",
      "title": "\"Stupid Conflict Of Interest Clause\": Ravi Shastri On Absence From IPL Commentary During India Coach.. - NDTV Sports",
      "description": "IPL 2022: Ravi Shastri did not mince words when speaking about why he could not commentate in the Indian Premier League when he was coaching the Indian men's team.",
      "url": "https://sports.ndtv.com/ipl-2022/stupid-conflict-of-interest-clause-ravi-shastri-on-absence-from-indian-premier-league-commentary-during-india-coaching-stint-2836883",
      "urlToImage": "https://c.ndtvimg.com/2021-09/8l23je8g_ravi-shastri-afp_625x300_05_September_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-03-22T14:14:00Z",
      "content": "Ravi Shastri is known for his impeccable broadcasting skills, and having spent some time off from commentating during his stint as the head coach of the Indian Men's Cricket Team, is back in the comm… [+1362 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Manoj C G",
      "title": "Sonia meets 3 G23 leaders in peace effort, they tell her don’t rely on select few - The Indian Express",
      "description": "Sources said Sonia responded positively to their suggestions and agreed that there was a need for a change in the way the party functions now to take on the challenges.",
      "url": "https://indianexpress.com/article/india/azad-sonia-anand-sharma-manish-tiwari-g-23-meetings-expected-7831568/",
      "urlToImage": "https://images.indianexpress.com/2022/03/sonia.jpg",
      "publishedAt": "2022-03-22T14:11:57Z",
      "content": "Congress president Sonia Gandhi Tuesday held a lengthy discussion with Anand Sharma, Manish Tewari and Vivek Tankha as she stepped up efforts to placate the leaders of the G-23 dissident group to fin… [+3621 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": null,
      "title": "Here’s how Vitamin C helps boost immunity against non-communicable diseases - Times of India",
      "description": "With an accelerated rise in the prevalence of non-communicable diseases (NCD) in India, Vitamin C has become one of the most needed nutrients to lead a healthy life. Cardiovascular diseases, cancer, respiratory diseases, and diabetes form the leading NCDs aff…",
      "url": "https://timesofindia.indiatimes.com/videos/news/heres-how-vitamin-c-helps-boost-immunity-against-non-communicable-diseases/videoshow/90379505.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-90379505,imgsize-35526.cms",
      "publishedAt": "2022-03-22T13:37:02Z",
      "content": "Mar 22, 2022, 07:07PM ISTSource: ANI With an accelerated rise in the prevalence of non-communicable diseases (NCD) in India, Vitamin C has become one of the most needed nutrients to lead a healthy li… [+446 chars]"
      }
      
  ]

  constructor() {
    super();
    console.log("This is constructor")


  }
  
   async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49ed4bbdc5c94961b660f8cf79d6412d"
      let data = await fetch(url)
      let content = await data.json()
      console.log(content)
      this.setState(this.articles=content.articles)
    }

   
  render() {
    return (
      <div className='container my-3'>
        <div className="d-flex">

        <h2 className="news-heading">NewsMonkey - Top Headlines</h2>
        <a href='/' className="btn btn-primary mx-3 mt-1 " style={{'width': '100px'}}>Refresh</a>
        </div>
        <div className="row">
        {this.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                          <NewsItem title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0,80):""} imgurl={element.urlToImage?element.urlToImage:"https://bitsofco.de/content/images/2018/12/broken-1.png"} newsurl={element.url?element.url:""}/>
                      </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
