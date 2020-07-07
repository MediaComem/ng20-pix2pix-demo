import * as ml5 from "ml5";

export const fetchPix2PixModel = async (modelURL) => {
  return ml5.pix2pix(modelURL)
}

export const transformCanvas = async (canvas, pix2pixLoadedModel) => {
  return pix2pixLoadedModel.transfer(canvas);
}