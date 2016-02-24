'use strict';

module.exports = function(){
	var _users = [
      {
        "first_name": "Brye",
        "img": "2016-02-06/56b6aebe78b77_LgJU5TvxsswozXA_640x1136.jpg",
        "photo_id": 512448,
        "grade_letter": "A+",
        "total_weekly_likes": 751,
        "grade_num": 97,
        "fbid": "10206206700630048"
      },
      {
        "first_name": "Tegan",
        "img": "2016-02-19/56c771a1a2ff0_VRfQBaidUTTLZ3d_640x1136.jpg",
        "photo_id": 521219,
        "grade_letter": "B-",
        "total_weekly_likes": 692,
        "grade_num": 82,
        "fbid": "10202790857373140"
      },
      {
        "first_name": "Athena",
        "img": "2016-02-16/56c2c34507136_fV6r24q43JSsrpS_640x1136.jpg",
        "photo_id": 519233,
        "grade_letter": "A+",
        "total_weekly_likes": 677,
        "grade_num": 98,
        "fbid": "10203984187988557"
      },
      {
        "first_name": "Lindsay",
        "img": "2016-02-19/56c768ed1bf62_RykvoCUWAd7QkXd_640x1136.jpg",
        "photo_id": 521211,
        "grade_letter": "B-",
        "total_weekly_likes": 624,
        "grade_num": 81,
        "fbid": "10205287734696446"
      },
      {
        "first_name": "Amber",
        "img": "2016-02-17/56c4edd561ee4_VPkt8bDbsifi2BR_640x1136.jpg",
        "photo_id": 520226,
        "grade_letter": "A-",
        "total_weekly_likes": 612,
        "grade_num": 91,
        "fbid": "10101008133509424"
      },
      {
        "first_name": "Alexis",
        "img": "2016-02-15/56c2445b005dd_Q26xWhwnaKcs2md_640x1136.jpg",
        "photo_id": 518841,
        "grade_letter": "A",
        "total_weekly_likes": 585,
        "grade_num": 95,
        "fbid": "10154074795979657"
      },
      {
        "first_name": "Jasmine",
        "img": "2016-02-15/56c1f426f10cf_Kk9BW7jsfxs6jWQ_640x1136.jpg",
        "photo_id": 518691,
        "grade_letter": "A",
        "total_weekly_likes": 564,
        "grade_num": 96,
        "fbid": "1193634667318097"
      },
      {
        "first_name": "Amy",
        "img": "2016-02-19/56c6a9c63c622_5FZissTEjhyvhqY_640x1136.jpg",
        "photo_id": 520991,
        "grade_letter": "A-",
        "total_weekly_likes": 546,
        "grade_num": 93,
        "fbid": "10205942977587438"
      },
      {
        "first_name": "Eva",
        "img": "2016-02-16/56c3f6fdc6900_KfWHGBmVLd3wcuP_640x1136.jpg",
        "photo_id": 519841,
        "grade_letter": "A",
        "total_weekly_likes": 532,
        "grade_num": 95,
        "fbid": "10156579392585271"
      },
      {
        "first_name": "Beckto",
        "img": "2016-02-16/56c3cc189cbc0_4tYWCAmwjoXqVKP_640x1136.jpg",
        "photo_id": 519721,
        "grade_letter": "A",
        "total_weekly_likes": 519,
        "grade_num": 95,
        "fbid": "928171343870139"
      },
      {
        "first_name": "Stephanie",
        "img": "2016-02-16/56c355040e87c_zmpnnPbyjyVU3Um_640x1136.jpg",
        "photo_id": 519451,
        "grade_letter": "B",
        "total_weekly_likes": 461,
        "grade_num": 85,
        "fbid": "10205970088754862"
      },
      {
        "first_name": "Itzy",
        "img": "2016-02-13/56bf8a6dc83fe_frF2zzMTpBzaWRN_640x1136.jpg",
        "photo_id": 517437,
        "grade_letter": "A-",
        "total_weekly_likes": 457,
        "grade_num": 93,
        "fbid": "10153453508817462"
      },
      {
        "first_name": "Nicole",
        "img": "2016-02-15/56c23f091764e_RvrUkArmQXBP2UB_640x1136.jpg",
        "photo_id": 518820,
        "grade_letter": "A",
        "total_weekly_likes": 452,
        "grade_num": 96,
        "fbid": "10101851549486787"
      },
      {
        "first_name": "Naila",
        "img": "2016-02-16/56c3b1a047e83_exCW7fRDv6qUtvB_640x1136.jpg",
        "photo_id": 519652,
        "grade_letter": "A",
        "total_weekly_likes": 429,
        "grade_num": 96,
        "fbid": "1491154367877893"
      },
      {
        "first_name": "Alivia",
        "img": "2016-02-16/56c3289af1c26_m9LbnQw3Cru2mjz_640x1136.jpg",
        "photo_id": 519400,
        "grade_letter": "C+",
        "total_weekly_likes": 421,
        "grade_num": 77,
        "fbid": "10156500005475655"
      },
      {
        "first_name": "Justine",
        "img": "2016-02-16/56c2ccd0d0cf7_dg51VmWBTE9yF63_640x1136.jpg",
        "photo_id": 519264,
        "grade_letter": "A-",
        "total_weekly_likes": 420,
        "grade_num": 93,
        "fbid": "10100391085419168"
      },
      {
        "first_name": "Andrea",
        "img": "2016-02-14/56c0ae14807bf_ctaNcnkWpFbi92F_640x1136.jpg",
        "photo_id": 517964,
        "grade_letter": "B-",
        "total_weekly_likes": 406,
        "grade_num": 80,
        "fbid": "10208926785393902"
      },
      {
        "first_name": "Antonella",
        "img": "2016-02-18/56c697edede94_KNFbKrdht8jPuHa_640x1136.jpg",
        "photo_id": 520929,
        "grade_letter": "B+",
        "total_weekly_likes": 394,
        "grade_num": 88,
        "fbid": "10153446652726903"
      },
      {
        "first_name": "Celeste",
        "img": "2016-02-18/56c66e4ff3734_DjCAtEABanyLdSL_640x1136.jpg",
        "photo_id": 520814,
        "grade_letter": "A-",
        "total_weekly_likes": 387,
        "grade_num": 91,
        "fbid": "10205317794529716"
      },
      {
        "first_name": "Marissa",
        "img": "2016-02-16/56c2ad1999a0d_hNx99Y8CB9ujwyL_640x1136.jpg",
        "photo_id": 519165,
        "grade_letter": "A",
        "total_weekly_likes": 384,
        "grade_num": 94,
        "fbid": "10102235375671144"
      },
      {
        "first_name": "Yarelhy",
        "img": "2016-02-21/56ca409d23674_332wLYUWA6oDGX6_640x1136.jpg",
        "photo_id": 522587,
        "grade_letter": "A",
        "total_weekly_likes": 378,
        "grade_num": 96,
        "fbid": "10205660385884368"
      },
      {
        "first_name": "Tatyana",
        "img": "2016-02-15/56c29f4726f5e_VuqHrPvfy2vZckd_640x1136.jpg",
        "photo_id": 519113,
        "grade_letter": "B+",
        "total_weekly_likes": 370,
        "grade_num": 88,
        "fbid": "8800143"
      },
      {
        "first_name": "Izabella",
        "img": "2016-02-12/56be3fbcdacfc_NgRMHvhaF7g8Uif_640x1136.jpg",
        "photo_id": 516707,
        "grade_letter": "A-",
        "total_weekly_likes": 364,
        "grade_num": 90,
        "fbid": "10206473273936686"
      },
      {
        "first_name": "Vanessa",
        "img": "2016-02-18/56c5f03d26c7a_cNExmk8pbfUL29k_640x1136.jpg",
        "photo_id": 520603,
        "grade_letter": "A-",
        "total_weekly_likes": 358,
        "grade_num": 92,
        "fbid": "10153414643425948"
      },
      {
        "first_name": "Jessica",
        "img": "2016-02-12/56bddcf18c263_CWGpx4xPHXeSbCx_640x1136.jpg",
        "photo_id": 516557,
        "grade_letter": "B-",
        "total_weekly_likes": 348,
        "grade_num": 82,
        "fbid": "10153906954248486"
      },
      {
        "first_name": "Rhoda",
        "img": "2016-02-16/56c37b9af20eb_WYC9v7nsTYMEbBv_640x1136.jpg",
        "photo_id": 519496,
        "grade_letter": "A-",
        "total_weekly_likes": 347,
        "grade_num": 91,
        "fbid": "953004034790015"
      },
      {
        "first_name": "Camille",
        "img": "2016-02-16/56c3e6010d67d_mFCU68neHgREB5e_640x1136.jpg",
        "photo_id": 519772,
        "grade_letter": "A-",
        "total_weekly_likes": 339,
        "grade_num": 93,
        "fbid": "1547790665"
      },
      {
        "first_name": "Lisa",
        "img": "2016-02-19/56c706a7f034e_fV2L8oV3abdVwe7_640x1136.jpg",
        "photo_id": 521090,
        "grade_letter": "A",
        "total_weekly_likes": 338,
        "grade_num": 94,
        "fbid": "10153853962333750"
      },
      {
        "first_name": "Amy",
        "img": "2016-02-18/56c67b362e4c9_uknX5xGKMXSxQcZ_640x1136.jpg",
        "photo_id": 520841,
        "grade_letter": "A-",
        "total_weekly_likes": 333,
        "grade_num": 92,
        "fbid": "39607916"
      },
      {
        "first_name": "Jessica",
        "img": "2016-02-04/56b345c9521b9_M66wYXfNBNjmE7f_640x1136.jpg",
        "photo_id": 509678,
        "grade_letter": "A",
        "total_weekly_likes": 324,
        "grade_num": 95,
        "fbid": "10103607140044333"
      },
      {
        "first_name": "Kayleigh",
        "img": "2016-02-20/56c8ec52bd368_3w9E8weihyVPdfb_640x1136.jpg",
        "photo_id": 521872,
        "grade_letter": "A-",
        "total_weekly_likes": 320,
        "grade_num": 93,
        "fbid": "10208661007865796"
      },
      {
        "first_name": "Kalie",
        "img": "2016-02-17/56c4c51987a25_KoRz3fsosW2Xdod_640x1136.jpg",
        "photo_id": 520158,
        "grade_letter": "A-",
        "total_weekly_likes": 311,
        "grade_num": 91,
        "fbid": "10156538317365486"
      },
      {
        "first_name": "Mariel",
        "img": "2016-02-20/56c922203203a_Ur7h96kU648y9uP_640x1136.jpg",
        "photo_id": 522014,
        "grade_letter": "A",
        "total_weekly_likes": 301,
        "grade_num": 94,
        "fbid": "10102301106426495"
      },
      {
        "first_name": "Yaritza",
        "img": "2016-02-17/56c52d022eb4a_1oxMUZSQVukQUYL_640x1136.jpg",
        "photo_id": 520342,
        "grade_letter": "A-",
        "total_weekly_likes": 295,
        "grade_num": 90,
        "fbid": "1903114013248009"
      },
      {
        "first_name": "Paula",
        "img": "2016-02-21/56ca60733e7c1_uy3PCZRgXanwCZB_640x1136.jpg",
        "photo_id": 522712,
        "grade_letter": "A",
        "total_weekly_likes": 291,
        "grade_num": 96,
        "fbid": "10207623461040278"
      },
      {
        "first_name": "Chelsea",
        "img": "2016-02-19/56c77773da1b2_mKALJ91yNT8Q5VV_640x1136.jpg",
        "photo_id": 521247,
        "grade_letter": "A",
        "total_weekly_likes": 290,
        "grade_num": 94,
        "fbid": "10152944611173246"
      },
      {
        "first_name": "Chelsea",
        "img": "2016-02-20/56c88bd70be3d_neVciD3AwaqVNgs_640x1136.jpg",
        "photo_id": 521684,
        "grade_letter": "B+",
        "total_weekly_likes": 281,
        "grade_num": 89,
        "fbid": "10207036991940781"
      },
      {
        "first_name": "Harmony",
        "img": "2016-02-19/56c7b4b072ed3_cbpyrRec7UVZxzP_640x1136.jpg",
        "photo_id": 521365,
        "grade_letter": "A+",
        "total_weekly_likes": 275,
        "grade_num": 99,
        "fbid": "924039817658578"
      },
      {
        "first_name": "Bryanna",
        "img": "2016-02-19/56c79cb971a0d_HZZatYCWcfUo2K7_640x1136.jpg",
        "photo_id": 521315,
        "grade_letter": "A-",
        "total_weekly_likes": 273,
        "grade_num": 93,
        "fbid": "862587257196112"
      },
      {
        "first_name": "Chloé",
        "img": "2016-02-21/56c95840a0bfc_tTKZyCDk5ZbLqqt_640x1136.jpg",
        "photo_id": 522189,
        "grade_letter": "A+",
        "total_weekly_likes": 271,
        "grade_num": 99,
        "fbid": "10206933475160988"
      },
      {
        "first_name": "Anastasiya",
        "img": "2016-02-15/56c24e5bb039f_Q7YhPPqPjbmWJuc_640x1136.jpg",
        "photo_id": 518876,
        "grade_letter": "B+",
        "total_weekly_likes": 267,
        "grade_num": 88,
        "fbid": "731575066350"
      },
      {
        "first_name": "Ariella",
        "img": "2016-02-21/56ca3c868f1ab_j4AT8xDqbNihfy2_640x1136.jpg",
        "photo_id": 522583,
        "grade_letter": "A",
        "total_weekly_likes": 265,
        "grade_num": 95,
        "fbid": "10153460253798393"
      },
      {
        "first_name": "Sabrina",
        "img": "2016-02-21/56ca49e4a0d5c_bNyxBRYsardR6LU_640x1136.jpg",
        "photo_id": 522643,
        "grade_letter": "A",
        "total_weekly_likes": 253,
        "grade_num": 94,
        "fbid": "10205132707418046"
      },
      {
        "first_name": "Sandra",
        "img": "2016-02-15/56c259e58da69_UiRyr7h4Y6RNjm3_640x1136.jpg",
        "photo_id": 518914,
        "grade_letter": "B+",
        "total_weekly_likes": 252,
        "grade_num": 88,
        "fbid": "10156416098200290"
      },
      {
        "first_name": "Alicia",
        "img": "2015-02-02/54d03d093a26d_BCpjJJn62jqg2dc_640x1136.jpg",
        "photo_id": 94405,
        "grade_letter": "B+",
        "total_weekly_likes": 249,
        "grade_num": 89,
        "fbid": "1331060055"
      },
      {
        "first_name": "Kyrsten",
        "img": "2016-02-04/56b2facc50b91_NyseGipptBLrhxp_640x1136.jpg",
        "photo_id": 509563,
        "grade_letter": "B",
        "total_weekly_likes": 236,
        "grade_num": 85,
        "fbid": "179655335736234"
      },
      {
        "first_name": "Catalina",
        "img": "2016-02-13/56bffa15c6ec2_KPPy3pdvr45AVuS_640x1136.jpg",
        "photo_id": 517699,
        "grade_letter": "A-",
        "total_weekly_likes": 233,
        "grade_num": 91,
        "fbid": "10153479556218990"
      },
      {
        "first_name": "Blair",
        "img": "2016-02-21/56ca50b9aa883_DBAXpJXUza3u9ji_640x1136.jpg",
        "photo_id": 522660,
        "grade_letter": "A",
        "total_weekly_likes": 233,
        "grade_num": 95,
        "fbid": "1693276647609732"
      },
      {
        "first_name": "Nicole",
        "img": "2016-02-07/56b6e92bb9925_BgJw3n2e8YFS6VL_640x1136.jpg",
        "photo_id": 512670,
        "grade_letter": "A-",
        "total_weekly_likes": 227,
        "grade_num": 93,
        "fbid": "10153153175046642"
      },
      {
        "first_name": "Cristina",
        "img": "2015-11-14/5647db0bc8717_HSaUcwmQwQzPZyf_640x1136.jpg",
        "photo_id": 374169,
        "grade_letter": "A-",
        "total_weekly_likes": 217,
        "grade_num": 91,
        "fbid": "10109724597320904"
      },
      {
        "first_name": "Liz",
        "img": "2016-02-15/56c296eac7662_vhrVqpZAxgZdFEE_640x1136.jpg",
        "photo_id": 519083,
        "grade_letter": "B+",
        "total_weekly_likes": 215,
        "grade_num": 88,
        "fbid": "10153298990852201"
      },
      {
        "first_name": "Jennifer",
        "img": "2015-10-25/562d2e7d3557d_kz4hwavaP69nAgp_640x1136.jpg",
        "photo_id": 352519,
        "grade_letter": "A-",
        "total_weekly_likes": 213,
        "grade_num": 90,
        "fbid": "10103187381942840"
      },
      {
        "first_name": "Brittany",
        "img": "2016-02-03/56b29e79c730b_rVfds1Gj497B79B_640x1136.jpg",
        "photo_id": 509068,
        "grade_letter": "A",
        "total_weekly_likes": 206,
        "grade_num": 94,
        "fbid": "10204957177473281"
      },
      {
        "first_name": "Wenxin",
        "img": "2016-02-16/56c3fa643ec1c_kzSrj42qTGe5eSs_640x1136.jpg",
        "photo_id": 519867,
        "grade_letter": "B-",
        "total_weekly_likes": 188,
        "grade_num": 80,
        "fbid": "1022713517788080"
      },
      {
        "first_name": "Jillian",
        "img": "2016-02-05/56b4fcf63e6f2_uKQW6L4Ea2NRVjX_640x1136.jpg",
        "photo_id": 510931,
        "grade_letter": "A-",
        "total_weekly_likes": 185,
        "grade_num": 92,
        "fbid": "10206992318824467"
      },
      {
        "first_name": "Malika",
        "img": "2016-01-24/56a56c7d74ae7_EAX8oLZ6RWKHqV9_640x1136.jpg",
        "photo_id": 502167,
        "grade_letter": "B-",
        "total_weekly_likes": 185,
        "grade_num": 81,
        "fbid": "918950254831982"
      },
      {
        "first_name": "Hannah",
        "img": "2015-03-13/550280ef8a1ad_SchERgWXbwUNtrR_640x1136.jpg",
        "photo_id": 140189,
        "grade_letter": "C-",
        "total_weekly_likes": 176,
        "grade_num": 73,
        "fbid": "567134820"
      },
      {
        "first_name": "Val",
        "img": "2016-02-07/56b7f4ae35390_BMz5D5grSzD74RQ_640x1136.jpg",
        "photo_id": 513410,
        "grade_letter": "B-",
        "total_weekly_likes": 176,
        "grade_num": 81,
        "fbid": "10152890438748233"
      },
      {
        "first_name": "Jenny",
        "img": "2016-02-06/56b682324a58d_KdbgL53croMmqRk_640x1136.jpg",
        "photo_id": 512182,
        "grade_letter": "B-",
        "total_weekly_likes": 173,
        "grade_num": 81,
        "fbid": "10103843369249019"
      },
      {
        "first_name": "Olivia",
        "img": "2016-02-14/56c11bb223c20_QVbpBYr7Hn6ZrXL_640x1136.jpg",
        "photo_id": 518277,
        "grade_letter": "A",
        "total_weekly_likes": 173,
        "grade_num": 96,
        "fbid": "10204036992500326"
      },
      {
        "first_name": "Cindy",
        "img": "2016-02-20/56c86d04dae52_Fd3ef4njZ8NF7Qa_640x1136.jpg",
        "photo_id": 521603,
        "grade_letter": "B+",
        "total_weekly_likes": 172,
        "grade_num": 88,
        "fbid": "1785902081646991"
      },
      {
        "first_name": "Esther",
        "img": "2016-02-21/56c9eceda7dc7_YFSJnazc7W2NWeQ_640x1136.jpg",
        "photo_id": 522375,
        "grade_letter": "A-",
        "total_weekly_likes": 171,
        "grade_num": 90,
        "fbid": "2400044"
      },
      {
        "first_name": "Ambar",
        "img": "2016-02-20/56c8e2c7f07d8_tZDAceHLL323FgE_640x1136.jpg",
        "photo_id": 521846,
        "grade_letter": "A-",
        "total_weekly_likes": 170,
        "grade_num": 92,
        "fbid": "1032548370109494"
      },
      {
        "first_name": "Miriam",
        "img": "2016-02-16/56c3b278e20ab_TZNJrm13c2Ge45K_640x1136.jpg",
        "photo_id": 519660,
        "grade_letter": "B-",
        "total_weekly_likes": 169,
        "grade_num": 83,
        "fbid": "10155647859640512"
      },
      {
        "first_name": "Ora",
        "img": "2016-02-16/56c3e837787a8_Pa4ooTYk2XPyLAu_640x1136.jpg",
        "photo_id": 519781,
        "grade_letter": "B",
        "total_weekly_likes": 168,
        "grade_num": 85,
        "fbid": "10100297434755710"
      },
      {
        "first_name": "Gillian",
        "img": "2016-02-21/56ca7aba2ffc8_snJjy7EGRGsFgH6_640x1136.jpg",
        "photo_id": 522825,
        "grade_letter": "A",
        "total_weekly_likes": 168,
        "grade_num": 94,
        "fbid": "10103864760480845"
      },
      {
        "first_name": "Stephanie",
        "img": "2015-12-06/5664f1f198905_4AaxYfCXrAVKwqX_640x1136.jpg",
        "photo_id": 426177,
        "grade_letter": "B+",
        "total_weekly_likes": 166,
        "grade_num": 87,
        "fbid": "10153373353371347"
      },
      {
        "first_name": "Melissa",
        "img": "2016-02-02/56b183dc19426_QwWvSSHizDjHpey_640x1136.jpg",
        "photo_id": 508532,
        "grade_letter": "A",
        "total_weekly_likes": 165,
        "grade_num": 95,
        "fbid": "468242106717589"
      },
      {
        "first_name": "Yoana",
        "img": "2016-02-22/56ca9fbfeb7a1_QPMvYfwgKMn5ebg_640x1136.jpg",
        "photo_id": 522967,
        "grade_letter": "B-",
        "total_weekly_likes": 165,
        "grade_num": 82,
        "fbid": "10153994430737871"
      },
      {
        "first_name": "Rebecca",
        "img": "2015-10-01/560df67523fc7_xP2oH2i1tGpT6qF_640x1136.jpg",
        "photo_id": 335096,
        "grade_letter": "A-",
        "total_weekly_likes": 164,
        "grade_num": 91,
        "fbid": "10207767307518835"
      },
      {
        "first_name": "Nileja",
        "img": "2016-02-10/56bbeeafcebf1_BxPgPrvWqPJncAD_640x1136.jpg",
        "photo_id": 515664,
        "grade_letter": "B+",
        "total_weekly_likes": 163,
        "grade_num": 89,
        "fbid": "10153614110039722"
      },
      {
        "first_name": "Isobel",
        "img": "2016-02-06/56b6775659b39_9TTp4dBhLJJNUnm_640x1136.jpg",
        "photo_id": 512135,
        "grade_letter": "A",
        "total_weekly_likes": 163,
        "grade_num": 95,
        "fbid": "10153094104791525"
      },
      {
        "first_name": "Kristen",
        "img": "2016-02-16/56c3901284b38_gA6ZHAEqj5hycca_640x1136.jpg",
        "photo_id": 519558,
        "grade_letter": "A",
        "total_weekly_likes": 163,
        "grade_num": 94,
        "fbid": "10153803327859933"
      },
      {
        "first_name": "Alisha",
        "img": "2016-02-21/56c9a8b4b488c_R9yEQTCpvuX19Dw_640x1136.jpg",
        "photo_id": 522269,
        "grade_letter": "B-",
        "total_weekly_likes": 162,
        "grade_num": 82,
        "fbid": "10101002296896044"
      },
      {
        "first_name": "Sarah",
        "img": "2016-02-03/56b2a6f4be777_G8Q3o6gRtGnuj1C_640x1136.jpg",
        "photo_id": 509099,
        "grade_letter": "A+",
        "total_weekly_likes": 162,
        "grade_num": 97,
        "fbid": "10153490576044436"
      },
      {
        "first_name": "Ariel",
        "img": "2016-02-22/56caaec6240aa_DTiHcjobJyk6AWG_640x1136.jpg",
        "photo_id": 523009,
        "grade_letter": "A",
        "total_weekly_likes": 162,
        "grade_num": 94,
        "fbid": "1647340022221831"
      },
      {
        "first_name": "Tayler",
        "img": "2016-02-07/56b803c330014_DuYH2zvhn1aA9ZK_640x1136.jpg",
        "photo_id": 513462,
        "grade_letter": "A-",
        "total_weekly_likes": 162,
        "grade_num": 93,
        "fbid": "10209060171601876"
      },
      {
        "first_name": "Erica",
        "img": "2016-01-15/56999f73b62e0_MSDNTVnNQpjb21c_640x1136.jpg",
        "photo_id": 491694,
        "grade_letter": "A+",
        "total_weekly_likes": 159,
        "grade_num": 97,
        "fbid": "10102513577018556"
      },
      {
        "first_name": "Julia",
        "img": "2016-02-21/56ca175f43890_tk62vdXBuL3h9eU_640x1136.jpg",
        "photo_id": 522478,
        "grade_letter": "A-",
        "total_weekly_likes": 158,
        "grade_num": 92,
        "fbid": "1220126218015528"
      },
      {
        "first_name": "Ree",
        "img": "2014-08-14/53ed1d04926ee_Mve7B8Hzb52edoD_640x1136.jpg",
        "photo_id": 10633,
        "grade_letter": "A",
        "total_weekly_likes": 156,
        "grade_num": 94,
        "fbid": "15707731"
      },
      {
        "first_name": "Rachel",
        "img": "2016-02-06/56b65668d675a_vbj2ktBDS781Hnz_640x1136.jpg",
        "photo_id": 512004,
        "grade_letter": "B",
        "total_weekly_likes": 153,
        "grade_num": 84,
        "fbid": "10152938369201376"
      },
      {
        "first_name": "Michelle",
        "img": "2016-02-20/56c9404b499cd_3i4dxJfQgeCLts1_640x1136.jpg",
        "photo_id": 522092,
        "grade_letter": "B-",
        "total_weekly_likes": 152,
        "grade_num": 82,
        "fbid": "10203972903984014"
      },
      {
        "first_name": "Joanne",
        "img": "2016-02-15/56c29e0e95321_5ZYTvc4H6vye3DT_640x1136.jpg",
        "photo_id": 519110,
        "grade_letter": "B",
        "total_weekly_likes": 151,
        "grade_num": 85,
        "fbid": "10100625303029692"
      },
      {
        "first_name": "Ciara",
        "img": "2016-01-25/56a5ca44d92a6_tHcEfHvok4i2YHx_640x1136.jpg",
        "photo_id": 502580,
        "grade_letter": "A",
        "total_weekly_likes": 150,
        "grade_num": 96,
        "fbid": "10204535759214436"
      },
      {
        "first_name": "Alexandra",
        "img": "2015-07-22/55b05c1225cd1_gpAMsJTYNTnfriJ_640x1136.jpg",
        "photo_id": 275496,
        "grade_letter": "A-",
        "total_weekly_likes": 150,
        "grade_num": 91,
        "fbid": "10207223454686874"
      },
      {
        "first_name": "Sarah",
        "img": "2016-02-05/56b55600d2f9d_b2khVgTy3WBMFaK_640x1136.jpg",
        "photo_id": 511197,
        "grade_letter": "A",
        "total_weekly_likes": 150,
        "grade_num": 95,
        "fbid": "10205705465091872"
      },
      {
        "first_name": "Caroline",
        "img": "2015-12-02/565f6319b7bb4_fPGtLrqCWS4tDVj_640x1136.jpg",
        "photo_id": 418103,
        "grade_letter": "A",
        "total_weekly_likes": 149,
        "grade_num": 95,
        "fbid": "10153400790224635"
      },
      {
        "first_name": "Jennifer",
        "img": "2016-01-19/569e6c5e33e18_bU5ZTjVGfSFF1JZ_640x1136.jpg",
        "photo_id": 496295,
        "grade_letter": "A-",
        "total_weekly_likes": 149,
        "grade_num": 93,
        "fbid": "443729319121184"
      },
      {
        "first_name": "Peyton",
        "img": "2016-02-15/56c16b860da4e_jPHTKkrP5dyEG3w_640x1136.jpg",
        "photo_id": 518494,
        "grade_letter": "A-",
        "total_weekly_likes": 148,
        "grade_num": 91,
        "fbid": "10205675883360040"
      },
      {
        "first_name": "Denise",
        "img": "2016-02-15/56c1a6eb1d3c1_rqM4SAa7PcAVNdo_640x1136.jpg",
        "photo_id": 518576,
        "grade_letter": "A-",
        "total_weekly_likes": 148,
        "grade_num": 90,
        "fbid": "1537999096529728"
      },
      {
        "first_name": "Anneliese",
        "img": "2015-12-14/566f78e3a5c96_PFxJ2Hc49oJPTQM_640x1136.jpg",
        "photo_id": 438828,
        "grade_letter": "A-",
        "total_weekly_likes": 145,
        "grade_num": 93,
        "fbid": "789500267843849"
      },
      {
        "first_name": "Dilara",
        "img": "2016-01-28/56a9f6f966877_8Kd5meoQAQMMJFJ_640x1136.jpg",
        "photo_id": 505108,
        "grade_letter": "B-",
        "total_weekly_likes": 144,
        "grade_num": 83,
        "fbid": "139474599766690"
      },
      {
        "first_name": "Celeste",
        "img": "2016-01-22/56a1e2537174c_YBt1k4wgpYqKmFU_640x1136.jpg",
        "photo_id": 499085,
        "grade_letter": "A",
        "total_weekly_likes": 144,
        "grade_num": 94,
        "fbid": "1042333765809053"
      },
      {
        "first_name": "Lauren",
        "img": "2016-01-28/56aa61293537c_noiLnwC6DR7B8QE_640x1136.jpg",
        "photo_id": 505307,
        "grade_letter": "A+",
        "total_weekly_likes": 142,
        "grade_num": 100,
        "fbid": "10153250304029399"
      },
      {
        "first_name": "Erika",
        "img": "2016-01-26/56a7d064f3eba_WwxgbZCNar4b5Fz_640x1136.jpg",
        "photo_id": 503822,
        "grade_letter": "A",
        "total_weekly_likes": 141,
        "grade_num": 96,
        "fbid": "10153736633812112"
      },
      {
        "first_name": "Emily",
        "img": "2015-12-29/568315dc52baf_ivQaC2w2hD6fsZp_640x1136.jpg",
        "photo_id": 460408,
        "grade_letter": "A-",
        "total_weekly_likes": 141,
        "grade_num": 90,
        "fbid": "10153822895631499"
      },
      {
        "first_name": "Stephanie",
        "img": "2016-02-13/56bfb80622ae5_1AiqdRHzjRhG5cG_640x1136.jpg",
        "photo_id": 517542,
        "grade_letter": "B+",
        "total_weekly_likes": 141,
        "grade_num": 89,
        "fbid": "10153863005237071"
      },
      {
        "first_name": "Morgan",
        "img": "2015-12-27/567ffd7408070_PBYrbG7zNABKbnK_640x1136.jpg",
        "photo_id": 455389,
        "grade_letter": "A+",
        "total_weekly_likes": 141,
        "grade_num": 97,
        "fbid": "11324194"
      },
      {
        "first_name": "Liliana",
        "img": "2016-02-21/56ca295e8e293_sP1gXCbKo3Gu2ov_640x1136.jpg",
        "photo_id": 522543,
        "grade_letter": "A-",
        "total_weekly_likes": 140,
        "grade_num": 90,
        "fbid": "10153967512498679"
      },
      {
        "first_name": "Jessica",
        "img": "2016-02-18/56c6987c9ff2d_DXnba6v1BLWRMzV_640x1136.jpg",
        "photo_id": 520930,
        "grade_letter": "B+",
        "total_weekly_likes": 139,
        "grade_num": 87,
        "fbid": "1118273251525194"
      }
    ];

	this.fetchData = function(){
		return _users;
	};

};