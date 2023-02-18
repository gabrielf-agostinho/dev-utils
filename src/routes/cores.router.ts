import express, { Request, Response } from 'express';
import { Hex } from '../models/cores/hex';
import { RGB } from '../models/cores/rgb';
import { RGBA } from '../models/cores/rgba';
import * as coresService from '../services/cores.service';

export const coresRouter = express.Router();

coresRouter.get('/', async (req: Request, res: Response) => {
  try {
    res.redirect('rgb');
  } 
  catch (e: any) {
    res.status(500).send(e.message);
  }
});

coresRouter.get('/rgb', async (req: Request, res: Response) => {
  try {
    const rgb: RGB = coresService.generateRGB();
    
    res.status(200).send(rgb);
  } 
  catch (e: any) {
    res.status(500).send(e.message);
  }
});

coresRouter.get('/rgba', async (req: Request, res: Response) => {
  try {
    const rgba: RGBA = coresService.generateRGBA();
    
    res.status(200).send(rgba);
  } 
  catch (e: any) {
    res.status(500).send(e.message);
  }
});

coresRouter.get('/hex', async (req: Request, res: Response) => {
  try {
    const hex: Hex = coresService.generateHex();
    
    res.status(200).send(hex);
  } 
  catch (e: any) {
    res.status(500).send(e.message);
  }
});