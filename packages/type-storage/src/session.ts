// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from '@polkadot/storage/types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const validators: CreateItemOptions = {
  description: `The current set of validators.`,
  key: 'Session Validators',
  params: [],
  type: ['AccountId']
};

const sessionLength: CreateItemOptions = {
  description: `Current length of the session.`,
  key: 'Session SessionLength',
  params: [],
  type: 'BlockNumber'
};

const currentIndex: CreateItemOptions = {
  description: `Current index of the session.`,
  key: 'Session CurrentIndex',
  params: [],
  type: 'BlockNumber'
};

const currentStart: CreateItemOptions = {
  description: `Timestamp when current session started.`,
  key: 'Session CurrentStart',
  params: [],
  type: 'Timestamp'
};

const forcingNewSession: CreateItemOptions = {
  description: `the new session should be considered a normal rotation (rewardable) or exceptional (slashable).`,
  key: 'Session ForcingNewSession',
  params: [],
  type: 'bool'
};

const lastLengthChange: CreateItemOptions = {
  description: `Block at which the session length last changed.`,
  key: 'Session LastLengthChange',
  params: [],
  type: 'BlockNumber'
};

const nextKeyFor: CreateItemOptions = {
  description: `The next key for a given validator.`,
  key: 'Session NextKeyFor',
  params: [param('who', 'AccountId')],
  type: 'SessionKey'
};

const nextSessionLength: CreateItemOptions = {
  description: `The next session length.`,
  key: 'Session NextSessionLength',
  params: [],
  type: 'BlockNumber'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Session management information',
    public: {
      validators: createMethod('validators')(validators),
      sessionLength: createMethod('sessionLength')(sessionLength),
      currentIndex: createMethod('currentIndex')(currentIndex),
      currentStart: createMethod('currentStart')(currentStart),
      forcingNewSession: createMethod('forcingNewSession')(forcingNewSession),
      lastLengthChange: createMethod('lastLengthChange')(lastLengthChange),
      nextKeyFor: createMethod('nextKeyFor')(nextKeyFor),
      nextSessionLength: createMethod('nextSessionLength')(nextSessionLength)
    }
  }));
