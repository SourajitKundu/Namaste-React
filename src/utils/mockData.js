//Single Object

/*const resObj = {
  type: "restaurant",
  info: {
    resId: 20824831,
    name: "Cafe Joy- Novotel",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/1/20824831/b2f140c619546dc8aad1984c80f11978_featured_v2.jpg",
      urlWithParams:
        "https://b.zmtcdn.com/data/pictures/1/20824831/b2f140c619546dc8aad1984c80f11978_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
    },
    o2FeaturedImage: {
      url: false,
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "4.1",
      rating_text: "4.1",
      rating_subtitle: "Very Good",
      rating_color: "5BA829",
      votes: "71",
      subtext: "REVIEWS",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: null,
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "4.1",
          reviewCount: "71",
          reviewTextSmall: "71 Reviews",
          subtext: "71 Dining Reviews",
          color: "#1C1C1C",
          ratingV2: "4.1",
          subtitle: "DINING",
          sideSubTitle: "Dining Ratings",
          bgColorV2: {
            type: "green",
            tint: "700",
          },
          newOnDining: false,
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "",
          reviewCount: "0",
          reviewTextSmall: "0 Reviews",
          subtext: "Not enough Delivery Reviews",
          color: "",
          ratingV2: "-",
          subtitle: "DELIVERY",
          sideSubTitle: "Delivery Ratings",
          bgColorV2: {
            type: "grey",
            tint: "500",
          },
          newOnDelivery: false,
          bucketRatings: {
            buckets: [],
            tooltip: {
              title: "For orders under 4 km",
              bgColor: {
                type: "grey",
                tint: "050",
              },
              borderColor: {
                type: "grey",
                tint: "300",
              },
            },
          },
        },
      },
    },
    cft: {
      text: "₹2,000 for two",
    },
    cfo: {
      text: "₹800 for one",
    },
    locality: {
      name: "Novotel, New Town, Kolkata",
      address: "CF 11, Action Area 1C, New Town, Kolkata",
      localityUrl: "kolkata/restaurants/in/novotel-new-town",
    },
    timing: {
      text: "",
      color: "",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/burger/",
        name: "Burger",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/kolkata/restaurants/coffee/",
        name: "Coffee",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/pizza/",
        name: "Pizza",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
        name: "Fast Food",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/italian/",
        name: "Italian",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/desserts/",
        name: "Desserts",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/ice-cream/",
        name: "Ice Cream",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/beverages/",
        name: "Beverages",
      },
    ],
    should_ban_ugc: false,
    costText: {
      text: "₹2,000 for two",
    },
  },
  order: [],
  gold: {
    instant: 15,
    welcome_offer: false,
    gold_offer: false,
    text: "Flat",
    offerValue: "15% OFF",
    isGoldIcon: false,
  },
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/kolkata/cafe-joy-novotel-new-town/info",
    clickActionDeeplink: "",
  },
  distance: "2.9 km",
  isPromoted: true,
  promotedText: "Promoted",
  trackingData: [
    {
      table_name: "jadtracking",
      payload:
        '{"banner_id":"7165370","bzone":"0","campaign_id":"16129543","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20824831","isNewAd":"34","ad_position":"10","slider_position":"10","slider_sequence":"10","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":26,\\"boosted_rank\\":10,\\"subzone_id\\":1186,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.030713\\",\\"cost_for_two_ctr\\":\\"0.041826\\",\\"distance\\":\\"2.8875162601470947\\",\\"organic_ctr\\":\\"0.012734\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"292\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.3114193584255296\\",\\"cost_for_two_ctr\\":\\"0.5054042095948423\\",\\"cost_per_unit\\":\\"0.4064080944350759\\",\\"distance\\":\\"0.4386069438489851\\",\\"organic_ctr\\":\\"0.03382139113380449\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.11550561797752809\\"},\\"search_id\\":\\"ee1914b5-33a8-4160-aaa8-42223974a50e\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3255740770103409}","subzone_id":"1186"}',
      event_names: {
        tap: '{"action":"click"}',
        impression: '{"action":"impression"}',
        served: '{"action":"serve"}',
      },
    },
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"ee1914b5-33a8-4160-aaa8-42223974a50e","location_type":"delivery_cell","location_id":"4180032758904520704","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20824831","element_type":"listing","rank":10,"metadata":{"is_ad":"true"}}',
      event_names: {
        tap: '{"action":"tap"}',
        impression: '{"action":"impression"}',
      },
    },
  ],
  allCTA: [],
  promoOffer: "",
  checkBulkOffers: false,
  bulkOffers: [],
  isDisabled: false,
  bottomContainers: [],
};*/

//Array of Objects

const resList = [
  {
    type: "restaurant",
    info: {
      resId: 20524701,
      name: "Miss Ginko",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20524701/a9c3bf2698c10469115d01699e5682b9_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/20524701/a9c3bf2698c10469115d01699e5682b9_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20524701/ab132f9807e366b2921b5fdeb553f185_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "699",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "637",
            reviewTextSmall: "637 Reviews",
            subtext: "637 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "62",
            reviewTextSmall: "62 Reviews",
            subtext: "62 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,500 for two",
      },
      cfo: {
        text: "₹600 for one",
      },
      locality: {
        name: "Ballygunge, Kolkata",
        address:
          "169, Rashbihari Avenue, 3rd Floor, City Mart, Ballygunge, Kolkata",
        localityUrl: "kolkata/ballygunge-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/thai/",
          name: "Thai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/miss-ginko-ballygunge/info",
      clickActionDeeplink: "",
    },
    distance: "5.8 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9356219","bzone":"0","campaign_id":"18332606","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20524701","isNewAd":"34","ad_position":"22","slider_position":"22","slider_sequence":"22","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":66,\\"boosted_rank\\":22,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.048056\\",\\"cost_for_two_ctr\\":\\"0.07758\\",\\"distance\\":\\"5.973933219909668\\",\\"organic_ctr\\":\\"0.018715\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"129\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.7827474997556765\\",\\"cost_for_two_ctr\\":\\"0.8529023746701847\\",\\"cost_per_unit\\":\\"0.6372077028885833\\",\\"distance\\":\\"0.48275408945816245\\",\\"organic_ctr\\":\\"0.07573227096938859\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.010157824042981867\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.4906478046125635}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20524701","element_type":"listing","rank":22,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21580726,
      name: "Bizarre Asia",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/21580726/fc19330d5b745709eca76f4aafbee741_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/21580726/fc19330d5b745709eca76f4aafbee741_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/21580726/06e06693ad1bb78c0849166085340f65_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "621",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "571",
            reviewTextSmall: "571 Reviews",
            subtext: "571 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "50",
            reviewTextSmall: "50 Reviews",
            subtext: "50 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Sector 3, Salt Lake, Kolkata",
        address:
          "Premises LA-1, Plot 1, 3rd Floor, Primarc Square, LA Block, Sector 3, Salt Lake, Kolkata",
        localityUrl: "kolkata/sector-3-salt-lake-restaurants",
      },
      timing: {
        text: "Closes in 51 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjQ3XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/bubble-tea/",
          name: "Bubble Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/juices/",
          name: "Juices",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/bizarre-asia-sector-3-salt-lake/info",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21580726","element_type":"listing","rank":23}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21196945,
      name: "YAYAvar- Hyatt Centric",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/21196945/1b4034a2d9b1e44f008b4f116c4bb641_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/21196945/1b4034a2d9b1e44f008b4f116c4bb641_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.6",
        rating_text: "4.6",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "698",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "698",
            reviewTextSmall: "698 Reviews",
            subtext: "698 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,050 for two",
      },
      cfo: {
        text: "₹850 for one",
      },
      locality: {
        name: "Gariahat, Kolkata",
        address: "17, Garcha 1st Lane, Gariahat, Kolkata",
        localityUrl: "kolkata/gariahat-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 21 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/european/",
          name: "European",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,050 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/yayavar-hyatt-centric-gariahat/info",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9357695","bzone":"0","campaign_id":"18334096","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21196945","isNewAd":"34","ad_position":"24","slider_position":"24","slider_sequence":"24","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":29,\\"boosted_rank\\":24,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.045948\\",\\"cost_for_two_ctr\\":\\"0.073885\\",\\"distance\\":\\"5.594883441925049\\",\\"organic_ctr\\":\\"0.012634\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"710\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.7484118969280387\\",\\"cost_for_two_ctr\\":\\"0.8122801231310467\\",\\"cost_per_unit\\":\\"0.5952544704264099\\",\\"distance\\":\\"0.5302025049187982\\",\\"organic_ctr\\":\\"0.04199148851171022\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.05893216924110141\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.47962671493014036}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21196945","element_type":"listing","rank":24,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19830002,
      name: "One8 Commune",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/19830002/43d05caab590ca37286168afc077baa0_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/19830002/43d05caab590ca37286168afc077baa0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "3,750",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "3,750",
            reviewTextSmall: "3,750 Reviews",
            subtext: "3,750 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹500 for one",
      },
      locality: {
        name: "Park Street Area, Kolkata",
        address: "13, Ho Chi Minh Sarani, Park Street Area, Kolkata",
        localityUrl: "kolkata/park-street-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/finger-food/",
          name: "Finger Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,200 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/one8-commune-park-street-area/info",
      clickActionDeeplink: "",
    },
    distance: "3.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19830002","element_type":"listing","rank":25}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19856099,
      name: "Garden Of Dreams",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/19856099/a43d9fd60389585cbaa7ac11f9da5a70_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/19856099/a43d9fd60389585cbaa7ac11f9da5a70_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/19856099/69eba2119fe4ac2e8b753ee786701846_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,678",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "1,606",
            reviewTextSmall: "1,606 Reviews",
            subtext: "1,606 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "72",
            reviewTextSmall: "72 Reviews",
            subtext: "72 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹500 for one",
      },
      locality: {
        name: "Ballygunge, Kolkata",
        address: "51, Syed Amir Ali Avenue, Ballygunge, Kolkata",
        localityUrl: "kolkata/ballygunge-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/kebab/",
          name: "Kebab",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,200 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/garden-of-dreams-2-ballygunge/info",
      clickActionDeeplink: "",
    },
    distance: "4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9339376","bzone":"0","campaign_id":"18315656","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"19856099","isNewAd":"34","ad_position":"26","slider_position":"26","slider_sequence":"26","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":232,\\"boosted_rank\\":26,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.044215\\",\\"cost_for_two_ctr\\":\\"0.064665\\",\\"distance\\":\\"4.13964319229126\\",\\"organic_ctr\\":\\"0.012914\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"1269\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.7201843828387139\\",\\"cost_for_two_ctr\\":\\"0.7109168865435356\\",\\"cost_per_unit\\":\\"0.578060522696011\\",\\"distance\\":\\"0.7123655029471604\\",\\"organic_ctr\\":\\"0.0435450848097122\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.10585963734049698\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.4780030906152002}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19856099","element_type":"listing","rank":26,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18617771,
      name: "Hard Rock Cafe",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/18617771/d33f753931ae31a4b14553b7bdc7f9f1_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/18617771/d33f753931ae31a4b14553b7bdc7f9f1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18617771/bdb75bf223fb134b915ae24bd1389241_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,095",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "6,032",
            reviewTextSmall: "6,032 Reviews",
            subtext: "6,032 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "63",
            reviewTextSmall: "63 Reviews",
            subtext: "63 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Park Street Area, Kolkata",
        address:
          "57, Park Mansion, Near Reliance Digital, Park Street Area, Kolkata",
        localityUrl: "kolkata/park-street-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/hard-rock-cafe-park-street-area/info",
      clickActionDeeplink: "",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18617771","element_type":"listing","rank":27}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18461746,
      name: "The Orient",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/18461746/f6abe46568d1611a36dd22f4f74a64f7_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/18461746/f6abe46568d1611a36dd22f4f74a64f7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/22428/d3380b27f0d4dda1a42b5de97b7076b0_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,039",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "3,051",
            reviewTextSmall: "3,051 Reviews",
            subtext: "3,051 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "4,988",
            reviewTextSmall: "4,988 Reviews",
            subtext: "4,988 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Sector 1, Salt Lake, Kolkata",
        address:
          "Shop E407A & E407B, Plot 1, 4th Floor, DC Block, City Centre, Sector 1, Salt Lake, Kolkata",
        localityUrl: "kolkata/sector-1-salt-lake-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/thai/",
          name: "Thai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/sushi/",
          name: "Sushi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/the-orient-sector-1-salt-lake/info",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9348440","bzone":"0","campaign_id":"18324778","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18461746","isNewAd":"34","ad_position":"28","slider_position":"28","slider_sequence":"28","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":27,\\"boosted_rank\\":28,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.036378\\",\\"cost_for_two_ctr\\":\\"0.066644\\",\\"distance\\":\\"5.040457725524902\\",\\"organic_ctr\\":\\"0.064885\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"148\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.592533472326286\\",\\"cost_for_two_ctr\\":\\"0.7326737027264731\\",\\"cost_per_unit\\":\\"0.5140990371389271\\",\\"distance\\":\\"0.5996040011383322\\",\\"organic_ctr\\":\\"0.3319092033934981\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.01175285426460712\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.45347145223692376}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18461746","element_type":"listing","rank":28,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20651068,
      name: "Chili's Grill & Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/25714/5909e194bc1cf107f4334e6833d4daca_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/4/25714/5909e194bc1cf107f4334e6833d4daca_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20651068/dc7d7c37cf4e40f63e601497bd9f96db_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,403",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "2,397",
            reviewTextSmall: "2,397 Reviews",
            subtext: "2,397 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "2,006",
            reviewTextSmall: "2,006 Reviews",
            subtext: "2,006 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,300 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Sector 1, Salt Lake, Kolkata",
        address:
          "Block-DC, 3rd Floor, Bidhan Nagar, Sector 1, Salt Lake, Kolkata",
        localityUrl: "kolkata/sector-1-salt-lake-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/mexican/",
          name: "Mexican",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTUwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/tex-mex/",
          name: "Tex-Mex",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/bbq/",
          name: "BBQ",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/cafes/",
          name: "Cafe",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,300 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/chilis-grill-bar-sector-1-salt-lake/info",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20651068","element_type":"listing","rank":29}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20510897,
      name: "Babylon",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/20510897/a082a8494c2c98fe2601f801a0e49b8d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/20510897/a082a8494c2c98fe2601f801a0e49b8d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20510897/825b5a65fdb56e39ecba3cf886c8f34d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,481",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "1,387",
            reviewTextSmall: "1,387 Reviews",
            subtext: "1,387 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "94",
            reviewTextSmall: "94 Reviews",
            subtext: "94 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹500 for one",
      },
      locality: {
        name: "Sector 1, Salt Lake, Kolkata",
        address: "AE 370, AE Block, Bidhannagar, Sector 1, Salt Lake, Kolkata",
        localityUrl: "kolkata/sector-1-salt-lake-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,200 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/babylon-sector-1-salt-lake/info",
      clickActionDeeplink: "",
    },
    distance: "6.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9349114","bzone":"0","campaign_id":"18325455","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20510897","isNewAd":"34","ad_position":"30","slider_position":"30","slider_sequence":"30","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":15,\\"boosted_rank\\":30,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.054214\\",\\"cost_for_two_ctr\\":\\"0.071972\\",\\"distance\\":\\"6.267552852630615\\",\\"organic_ctr\\":\\"0.027876\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"742\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.8830504609570968\\",\\"cost_for_two_ctr\\":\\"0.7912489006156552\\",\\"cost_per_unit\\":\\"0.5519257221458047\\",\\"distance\\":\\"0.44599958614512236\\",\\"organic_ctr\\":\\"0.12656261270508856\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.06161853593015447\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.44892589066907956}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20510897","element_type":"listing","rank":30,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20317915,
      name: "Warehouse Cafe",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20317915/bb609527019b0fd8ddb6211ab9328b3f_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20317915/bb609527019b0fd8ddb6211ab9328b3f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20317915/9590f4c5b779ceb4b80ca45fc32c0dca_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,215",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "2,215",
            reviewTextSmall: "2,215 Reviews",
            subtext: "2,215 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹750 for one",
      },
      locality: {
        name: "Prince Anwar Shah Road, Kolkata",
        address: "375, 403, 4th Floor, Prince Anwar Shah Road, Kolkata",
        localityUrl: "kolkata/prince-anwar-shah-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/warehouse-cafe-prince-anwar-shah-road/info",
      clickActionDeeplink: "",
    },
    distance: "7.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20317915","element_type":"listing","rank":31}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18668871,
      name: "K Local Sky Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/18668871/5bebc43eeff9b5240934142b44f50f63_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/18668871/5bebc43eeff9b5240934142b44f50f63_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18668871/ed2d9e425e1fdbee0842e0245e0c4439_o2_featured_v2.jpeg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,865",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "2,844",
            reviewTextSmall: "2,844 Reviews",
            subtext: "2,844 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.1",
            reviewCount: "21",
            reviewTextSmall: "21 Reviews",
            subtext: "21 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "yellow",
              tint: "400",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,400 for two",
      },
      cfo: {
        text: "₹600 for one",
      },
      locality: {
        name: "Sector 1, Salt Lake, Kolkata",
        address: "C-301, City Center, DC Block, Sector 1, Salt Lake, Kolkata",
        localityUrl: "kolkata/sector-1-salt-lake-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/modern-indian/",
          name: "Modern Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,400 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/k-local-sky-bar-sector-1-salt-lake/info",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"8906140","bzone":"0","campaign_id":"17881927","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18668871","isNewAd":"34","ad_position":"32","slider_position":"32","slider_sequence":"32","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":31,\\"boosted_rank\\":32,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.044677\\",\\"cost_for_two_ctr\\":\\"0.06187\\",\\"distance\\":\\"5.049491882324219\\",\\"organic_ctr\\":\\"0.012312\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"682\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.7277095481643158\\",\\"cost_for_two_ctr\\":\\"0.6801890941072999\\",\\"cost_per_unit\\":\\"0.5952544704264099\\",\\"distance\\":\\"0.5984731300758833\\",\\"organic_ctr\\":\\"0.04020485276900797\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.056581598388179985\\"},\\"search_id\\":\\"2f7b6c37-9eca-4d50-8446-b337bdb5b063\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.4470489807940322}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18668871","element_type":"listing","rank":32,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20974,
      name: "Oh! Calcutta",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20974/8fea29c91cf102066c45bff62f3cf22a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/4/20974/8fea29c91cf102066c45bff62f3cf22a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20974/defbbda33ababa8ad6597646574b6a63_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "5,168",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "2,832",
            reviewTextSmall: "2,832 Reviews",
            subtext: "2,832 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "2,336",
            reviewTextSmall: "2,336 Reviews",
            subtext: "2,336 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,200 for two",
      },
      cfo: {
        text: "₹900 for one",
      },
      locality: {
        name: "Elgin, Kolkata",
        address: "10/3, 4th Floor, Forum Mall, Elgin Road, Near Elgin, Kolkata",
        localityUrl: "kolkata/elgin-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 21 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/bengali/",
          name: "Bengali",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,200 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/oh-calcutta-elgin/info",
      clickActionDeeplink: "",
    },
    distance: "4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"2f7b6c37-9eca-4d50-8446-b337bdb5b063","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20974","element_type":"listing","rank":33}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];

export default resList;
