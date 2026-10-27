import packingLineUrl from '@/assets/photos/packing-line.jpg'
import warehousePalletsUrl from '@/assets/photos/warehouse-pallets.jpg'
import warehouseForkliftsUrl from '@/assets/photos/warehouse-forklifts.jpg'
import forkliftFloorUrl from '@/assets/photos/forklift-floor.jpg'
import loadingDockUrl from '@/assets/photos/loading-dock.jpg'
import type { MediaImage } from '@/types/content'
import { industryPhotoCaption } from '@/content/site'

export const packingLinePhoto = {
  src: packingLineUrl,
  alt: 'Workers packing fruit on a packing line.',
  width: 828,
  height: 637,
  caption: industryPhotoCaption,
  credit: 'Discott',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Graaff_Fruit-Ceres_packing.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
} satisfies MediaImage

export const warehousePalletsPhoto = {
  src: warehousePalletsUrl,
  alt: 'Palletized goods in a warehouse aisle with a forklift at work.',
  width: 1600,
  height: 1200,
  caption: industryPhotoCaption,
  credit: 'Chrisking',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Allentown_Project_042.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
} satisfies MediaImage

export const warehouseForkliftsPhoto = {
  src: warehouseForkliftsUrl,
  alt: 'Forklifts parked in a warehouse.',
  width: 1600,
  height: 1200,
  caption: industryPhotoCaption,
  credit: 'TLSuda',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:Wilson_Warehouse_Forklifts_2016_Baton_Rouge_Louisiana.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
} satisfies MediaImage

export const forkliftFloorPhoto = {
  src: forkliftFloorUrl,
  alt: 'A forklift on a shop floor inside a large hall.',
  width: 1600,
  height: 1066,
  caption: industryPhotoCaption,
  credit: 'Antti Leppänen',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clark_forklift_Keran_Hallit.jpg',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
} satisfies MediaImage

export const loadingDockPhoto = {
  src: loadingDockUrl,
  alt: 'A loading dock with roll-up doors and parked vehicles.',
  width: 1600,
  height: 1200,
  caption: industryPhotoCaption,
  credit: 'BrokenSphere',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:BSC_Central_Kitchen_loading_dock.JPG',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
} satisfies MediaImage

export const sitePhotos: MediaImage[] = [
  packingLinePhoto,
  warehousePalletsPhoto,
  warehouseForkliftsPhoto,
  forkliftFloorPhoto,
  loadingDockPhoto,
]
