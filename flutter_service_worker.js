'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "12b447f0f3e70c1f7a4644383361e9b4",
"assets/AssetManifest.bin.json": "9c99ba626ff31cc614e88914e81e1b8d",
"assets/AssetManifest.json": "6abe508b3e628bbdeaf19dd9f9851ecf",
"assets/assets/animations/cart_success.json": "c6a14c80c05e2b9b6b10d852e6151be8",
"assets/assets/animations/no_data.json": "02aa1c1e555a5388f29e9a217f7c5c97",
"assets/assets/animations/order_loading.json": "765cf874eae6bedb9f4b0bac06aa555f",
"assets/assets/animations/order_success.json": "05bda9abb52bc2bdbe5f8af9914a2d9c",
"assets/assets/icons/Accessories.svg": "be73af01b01038f3b44d15df43d37699",
"assets/assets/icons/Address.svg": "48c219ea0cb0f11f5a1042a809e06c7c",
"assets/assets/icons/Arrow%2520-%2520Down.svg": "c7cc911645096a95c78ef3d4f8888893",
"assets/assets/icons/Arrow%2520-%2520Left.svg": "ae0705c7cb75ebc7d5c1f34123cd593a",
"assets/assets/icons/Arrow%2520-%2520Right.svg": "f6b04f78c34a7365e9178739a9442941",
"assets/assets/icons/Arrow%2520-%2520Up.svg": "4598538bbb0967853115b649d809744d",
"assets/assets/icons/Bag.svg": "615e91a7ba7c2052f9e5b290b201fd25",
"assets/assets/icons/bag_full.svg": "df8f24a2f48b378ce7dee304d43754b0",
"assets/assets/icons/Behance.svg": "000392aea59f0f8ac9145a43569d943c",
"assets/assets/icons/Bookmark.svg": "784d807e7f513529bdf913e5eee5c717",
"assets/assets/icons/Calender.svg": "519f312bcc7e7657d47fef03c8f0a908",
"assets/assets/icons/Call.svg": "7daebd238ca2e83c2e7d996d43af04d1",
"assets/assets/icons/Camera-add.svg": "a7ad3295398c580a47eee86bda860acd",
"assets/assets/icons/Camera-Bold.svg": "40c0bc18c979b6e6985bafe112a5e3ab",
"assets/assets/icons/card.svg": "f377cfcb1187ea0e19486056762f952a",
"assets/assets/icons/Card_Pattern.svg": "da59c879333b53ba1e24c4d57a941b7b",
"assets/assets/icons/Cash.svg": "0a0296a916cd317d5a0c76500ba8e6cb",
"assets/assets/icons/Category.svg": "e6b2c8fe8b25f4580dbc1ad0cc5c2293",
"assets/assets/icons/Chat-add.svg": "95adaf56003db4bd0653fac2ca728b1a",
"assets/assets/icons/Chat.svg": "aed365fed79a34ab03121f7cab7486c3",
"assets/assets/icons/Child.svg": "f29568a054fa2b440212431575ad9498",
"assets/assets/icons/Clock.svg": "a18f380b924236927d1dbbb47e208f1b",
"assets/assets/icons/Close-Circle.svg": "9549dc0656cac4ab000a1fe7ced5d990",
"assets/assets/icons/Close.svg": "717998fab3c2892b6394d7593df14d24",
"assets/assets/icons/Coupon.svg": "d58a2d49795fbe3e8c038e8542153652",
"assets/assets/icons/CVV.svg": "7cd5eb0041587339a3080e1fd00bef54",
"assets/assets/icons/Danger%2520Circle.svg": "39caebfcb2d167b7397feba91315929a",
"assets/assets/icons/Delete.svg": "3e42f361717b25753dccf69283223ff4",
"assets/assets/icons/Delivery.svg": "dfc70c38d18344f2cf1203fd1513481d",
"assets/assets/icons/diamond.svg": "6b9904263fed251f8bcfab8050c7cfa5",
"assets/assets/icons/Discount.svg": "091d6870cb2cdef75f5ac2bdacd7ff52",
"assets/assets/icons/Discount_tag.svg": "fc3a7fd1448782446e7cfa1df74ed834",
"assets/assets/icons/Dislike.svg": "246ee0ef4ed2f475945447ef14100948",
"assets/assets/icons/dot.svg": "f55f268609ac1d945bea8c2f3ecd7735",
"assets/assets/icons/DotsH.svg": "d680d627134a9ed445072afcf1ffaa1c",
"assets/assets/icons/DotsV.svg": "68ed7e21cdf23aef326f8dec46e2c9a5",
"assets/assets/icons/Doublecheck.svg": "a3015b8b22e605679fc0b87b9d3e9caf",
"assets/assets/icons/Dribbble.svg": "457afc40d424462547c23eacab702f2f",
"assets/assets/icons/Edit%2520Square.svg": "77b337567cee323fb72690cd218cbf17",
"assets/assets/icons/Edit-Bold.svg": "70bfce09128659b50b4d8a9dcd68371d",
"assets/assets/icons/Emoji.svg": "560cb4b5775de159cf5dc95c2db2964a",
"assets/assets/icons/Facebook.svg": "3f2d0c68f43522a4a1b285f76c919e7b",
"assets/assets/icons/FaceId.svg": "07d6b78825a3a744ed89699a4be0010e",
"assets/assets/icons/FAQ.svg": "e39e36426442fc4a42ffe96d4462367e",
"assets/assets/icons/Filter.svg": "1c64f687e6c85f9746884e926d6549a3",
"assets/assets/icons/Fingerprint.svg": "81a7ec0dab34604fb2d0048398b54d09",
"assets/assets/icons/Flashlight.svg": "7e6de05e659986a882d71108d93ef0e1",
"assets/assets/icons/Gift.svg": "a694fd6e54d1a030329023221e1e074b",
"assets/assets/icons/Help.svg": "228c31b99c04fa09a04824713b555607",
"assets/assets/icons/Image.svg": "d65c2d5f60f54dd3d15ece55a367787f",
"assets/assets/icons/info.svg": "62530c25a4262e13fc147f7eba157b0f",
"assets/assets/icons/Instagram.svg": "85df9c81fecacd20761f9edaa45456af",
"assets/assets/icons/Language.svg": "7d437b21e3e2baa53d182f084b00386b",
"assets/assets/icons/Like.svg": "21d2a93c7430d2226b63a597319a0208",
"assets/assets/icons/Link.svg": "3725d81d95d4c7b6a26be0953b436158",
"assets/assets/icons/Linkedin.svg": "ce19fb5dcbe0991dcacb545f95025dda",
"assets/assets/icons/Loading.svg": "926aac526b5e9be4e7519661adb1fe4f",
"assets/assets/icons/Location.svg": "d386baa6180975ca3b1c412213c43817",
"assets/assets/icons/Lock.svg": "900d707849312cb786a59349329ef9c1",
"assets/assets/icons/Logout.svg": "f463f1cbcac0477cc32953893c1ea5e3",
"assets/assets/icons/Man&Woman.svg": "1e76d777351f5759da3e72928156d1fd",
"assets/assets/icons/Man.svg": "0804c4c324e5f63b7ff52a11949c865b",
"assets/assets/icons/Message.svg": "d285cb7af743bc7ba26509fa45909d29",
"assets/assets/icons/miniDown.svg": "a8c0c7164530f7de8a3922e5a4d2f7ca",
"assets/assets/icons/miniLeft.svg": "3f1ecffa36a92a5453f1b8187c93c0db",
"assets/assets/icons/miniRight.svg": "3720205c7d4ae01d4f6710137e5027bb",
"assets/assets/icons/miniTop.svg": "71bb20df4eb28fc245e592355d1dc8da",
"assets/assets/icons/Minus.svg": "63a163ca84a11a87058e55f2468fdb39",
"assets/assets/icons/Mylocation.svg": "d8431a354ed499fa141447d0cd6301bc",
"assets/assets/icons/Newcard.svg": "6d7e6ad692948e8826bc28032753cbc9",
"assets/assets/icons/Notification.svg": "6ea9ca3f499134d6566807efbf60f51f",
"assets/assets/icons/Order.svg": "7d32862fc35cb93679bf6362e1be11dc",
"assets/assets/icons/Payonline.svg": "5ee51d781f5d4e5bdf7accb6e99c74f1",
"assets/assets/icons/Plus1.svg": "59596579ccc6a2bfd742082e2e44e735",
"assets/assets/icons/Preferences.svg": "7106845e0fc04fccb96a13e87ebe7b6c",
"assets/assets/icons/Product.svg": "d8a65d7161854b8d8f45b0fcbf802712",
"assets/assets/icons/Profile.svg": "7e56a4b92cfb5e87662fd7246f301283",
"assets/assets/icons/Return.svg": "cb668cd41ff0bda744045a5c908209cb",
"assets/assets/icons/Sale.svg": "d7874b9c06fcf5574049d6b557482e8f",
"assets/assets/icons/Scan.svg": "ee52a9779b233c409d2dd3791db3bc30",
"assets/assets/icons/Search.svg": "f7933c688860cc630d85f4ddef242c1e",
"assets/assets/icons/Send.svg": "eee08afb31307226143c6abde0aa0014",
"assets/assets/icons/Setting.svg": "072edefa8c4f0e699f1d57afd507bb31",
"assets/assets/icons/Share.svg": "e2e454436bda9f231c8a68f67e2f9c4a",
"assets/assets/icons/Shop.svg": "6cc579b11738cd2d230f734c5843d7cc",
"assets/assets/icons/Show.svg": "a30d98c15fd80d0da12195eb9fa6b6e0",
"assets/assets/icons/Singlecheck.svg": "a6cb9b3a7b46e0e8b1754629214da482",
"assets/assets/icons/Sizeguid.svg": "0825894e65e584c282cdf97bbdf153e1",
"assets/assets/icons/Sort.svg": "72d527c3ff66641baba34e060ebc0270",
"assets/assets/icons/Standard.svg": "c7a789a47fac931879d946dab50a1ed2",
"assets/assets/icons/Star-bold.svg": "9ef02ca54c9ec0ffe06f0674cd77196e",
"assets/assets/icons/Star.svg": "e3756fd4afd722a172b8d9f9770a1a0d",
"assets/assets/icons/Star_filled.svg": "0ec0ecf88f557340b44f6d607222171f",
"assets/assets/icons/Stores.svg": "5540e0e2541034a8d2f25526e27649d9",
"assets/assets/icons/Trackorder.svg": "0cfd06731537de6384fbc4bf0fe8fc0c",
"assets/assets/icons/twitter.svg": "cda0971ca01042ec2ca8753469d3cd71",
"assets/assets/icons/Wallet.svg": "9ed16eb7157c67d182774c7c34065464",
"assets/assets/icons/Wishlist.svg": "f14e0e383768d7bc3ddddf110a217330",
"assets/assets/icons/Woman.svg": "65db0394e47c506b82a2bb5892bf52cc",
"assets/assets/icons/world_map.svg": "5d9cf73b48573bb186d96567bf3bc2ca",
"assets/assets/Illustration/EmptyState_darkTheme.png": "75f4dcd3bdf18519d4b0de2e06fe9ff7",
"assets/assets/Illustration/EmptyState_lightTheme.png": "fecfdc9a1ab653ea959606536b623055",
"assets/assets/Illustration/faceId.png": "431f634f005f5c32b0296b91ad0116e8",
"assets/assets/Illustration/faceId_dark.png": "3cb8ef92fb2f96124053b0af1afcf5f6",
"assets/assets/Illustration/Failed_darkTheme.png": "c9672b901f22fa2cfbad41d0fb418d2a",
"assets/assets/Illustration/Failed_lightTheme.png": "b9b329580b9b8dadc0c0d4f46cba0867",
"assets/assets/Illustration/fingerprint.png": "a30d227ef529907b1ce828d760bea6c7",
"assets/assets/Illustration/fingerprint_dark.png": "9e16723e6aac9d2aa99e52f7365ceb04",
"assets/assets/Illustration/Help_darkTheme.png": "47cd37ac3532d9d1d8c60b57cdc61ca7",
"assets/assets/Illustration/Help_lightTheme.png": "828da80b74d5d77f6f536ad2c9f618e4",
"assets/assets/Illustration/Illustration-0.png": "367814300acf0d280da1d92612060715",
"assets/assets/Illustration/Illustration-1.png": "1f1b5ee4ae9f5347c8d758bd0d085f40",
"assets/assets/Illustration/Illustration-2.png": "34a279296f06659a0d39907877693aed",
"assets/assets/Illustration/Illustration-3.png": "d9bea71f50cb8c8a4764b930a7f4f086",
"assets/assets/Illustration/Illustration-4.png": "a4be058ed6d0cb0a37a0bbfa1dd7c335",
"assets/assets/Illustration/Illustration_darkTheme_0.png": "9c2b5e6a33cfcabe77f5e3381d3eadcc",
"assets/assets/Illustration/Illustration_darkTheme_1.png": "4b39992b72df432578a47ee5ccaffca1",
"assets/assets/Illustration/Illustration_darkTheme_2.png": "35088005212f0547c388b3f36058d599",
"assets/assets/Illustration/Illustration_darkTheme_3.png": "c0d50929286c6b0ff4d3cf74fd299baa",
"assets/assets/Illustration/Illustration_darkTheme_4.png": "084ee2708e30feb5b4b05e61f992f0a1",
"assets/assets/Illustration/NoResult.png": "6bdc365ba2174f871a5379cd9e9a478a",
"assets/assets/Illustration/NoResultDarkTheme.png": "770577343ebe3c99f4f2ae2d5be25daf",
"assets/assets/Illustration/no_internet.png": "7b5a1b34f5998bfb3da137fc1ec15ee8",
"assets/assets/Illustration/no_internet_dark.png": "d6ee0c6ad10d1e65296090b9ab5d342c",
"assets/assets/Illustration/Password.png": "fc4e536c734c7c7d0a5c946f73084dec",
"assets/assets/Illustration/Password_dark.png": "5b2f0f984b84a41dd504cfa623ea71b4",
"assets/assets/Illustration/PayWithCash_darkTheme.png": "53b7d493d04a64992bcecbaa47249433",
"assets/assets/Illustration/PayWithCash_lightTheme.png": "6893db365d958535c4b00f61a936d15b",
"assets/assets/Illustration/server_error.png": "44832349231a3d9a37d31b28ff2d1999",
"assets/assets/Illustration/server_error_dark.png": "29af4089621e9ab466212f9011a80287",
"assets/assets/Illustration/success.png": "aefb15ea2c339e2537730b72ef3e5c05",
"assets/assets/Illustration/success_dark.png": "ace1a133b0f0b662e3d32232498ebdc0",
"assets/assets/Illustration/Success_darkTheme.png": "cbe539d0a957f963e526514b74514481",
"assets/assets/Illustration/Success_lightTheme.png": "b2ef00dad08bec5a0104e4a9851bc7d2",
"assets/assets/Illustration/TurnOnNotification_darkTheme.png": "3f2908d3b3a5cf906f1278211aa6f59a",
"assets/assets/Illustration/TurnOnNotification_lightTheme.png": "9791e133e17a0b09d15c16ddd5f973bc",
"assets/assets/Illustration/VerificationCode_dark.png": "c4d4af3d747d98aba2adc3a961d7de7d",
"assets/assets/images/login_dark.png": "c71280e124a11420d71274cb3a93b49d",
"assets/assets/images/signUp_dark.png": "132845530b9e509cd2c4b94e6123abb8",
"assets/assets/logo/land_mark.jpg": "8d1ce3980ad17b10c10c975999d8bfbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8eb749048ba957c7a32c092564726270",
"assets/NOTICES": "2aad0d0a960f82f5e8eb1f5f0ee29e4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "38bb566200fa8300900b19932748f042",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/land_mark.png": "8d80ce5522abe59ceab9aa3dbafaab3f",
"index.html": "9582066fe4e3494bb00467c1db21a341",
"/": "9582066fe4e3494bb00467c1db21a341",
"main.dart.js": "ec4eeb5694e302f358e4146cd31ec57a",
"manifest.json": "b857a1466abbfc897a982ad9ee1bc9dc",
"styles.css": "2d5e15c4e69f0bf7d953155143b1755d",
"version.json": "8eed60ba918e3e1b664a892453087d7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
