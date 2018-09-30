// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsics } from '@polkadot/extrinsics/types';

import consensus from './consensus';
import balances from './balances';
import council from './council';
import councilVoting from './councilVoting';
import democracy from './democracy';
import session from './session';
import staking from './staking';
import timestamp from './timestamp';
import treasury from './treasury';

const extrinsics: Extrinsics = {
  consensus: consensus('consensus', 0),
  balances: balances('balances', 1),
  session: session('session', 2),
  staking: staking('staking', 3),
  timestamp: timestamp('timestamp', 4),
  treasury: treasury('treasury', 5),
  democracy: democracy('democracy', 6),
  council: council('council', 7),
  councilVoting: councilVoting('councilVoting', 8)
};

export default extrinsics;
