// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, SectionItem } from '@polkadot/params/types';
import { Extrinsics } from '../../types';
import { ExtrinsicWithIndex } from '../types';

import BN from 'bn.js';
import encodeParams from '@polkadot/params/encode';
import defaultSizes from '@polkadot/primitives/sizes';
import u8aConcat from '@polkadot/util/u8a/concat';
import prefixes from './prefixes';
import bnToU8a from '@polkadot/util/bn/toU8a';

export default function encodeExtrinsic (extrinsic: SectionItem<Extrinsics>, values: Array<any>, nonce: number | BN, version: EncodingVersions): ExtrinsicWithIndex {
  return u8aConcat(
    bnToU8a(nonce, 64, true),
    prefixes.era,
    new Uint8Array([1, 0]),
    encodeParams(extrinsic.params, values, version)
  );
}
