type TgetRandomIndex = ([]) => number

export const getRandomIndex: TgetRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

export class Cover {
  id: number
  cover: string
  title: string
  tagline1: string
  tagline2: string
  constructor(
    coverImgSrc: string,
    title: string,
    descriptor1: string,
    descriptor2: string
  ) {
    this.id = Date.now()
    this.cover = coverImgSrc
    this.title = title
    this.tagline1 = descriptor1
    this.tagline2 = descriptor2
  }
}
