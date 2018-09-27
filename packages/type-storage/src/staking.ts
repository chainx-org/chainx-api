// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const validatorCount: CreateItemOptions = {
  description: `The ideal number of staking participants.`,
  key: 'Staking ValidatorCount',
  params: [],
  type: 'u32'
};

const minimumValidatorCount: CreateItemOptions = {
  description: `Minimum number of staking participants before emergency conditions are imposed.`,
  key: 'Staking MinimumValidatorCount',
  params: [],
  type: 'u32'
};

const sessionsPerEra: CreateItemOptions = {
  description: `The length of a staking era in sessions.`,
  key: 'Staking SessionsPerEra',
  params: [],
  type: 'BlockNumber'
};

const sessionReward: CreateItemOptions = {
  description: `Maximum reward, per validator, that is provided per acceptable session.`,
  key: 'Staking SessionReward',
  params: [],
  type: 'Balance'
};

const offlineSlash: CreateItemOptions = {
  description: `Slash, per validator that is taken for the first time they are found to be offline.`,
  key: 'Staking OfflineSlash',
  params: [],
  type: 'Balance'
};

const offlineSlashGrace: CreateItemOptions = {
  description: `Number of instances of offline reports before slashing begins for validators.`,
  key: 'Staking OfflineSlashGrace',
  params: [],
  type: 'u32'
};

const bondingDuration: CreateItemOptions = {
  description: `The length of the bonding duration in blocks.`,
  key: 'Staking BondingDuration',
  params: [],
  type: 'BlockNumber'
};

const currentEra: CreateItemOptions = {
  description: `The current era index.`,
  key: 'Staking CurrentEra',
  params: [],
  type: 'BlockNumber'
};

const validatorPreferences: CreateItemOptions = {
  description: `Preferences that a validator has.`,
  key: 'Staking ValidatorPreferences',
  params: [param('who', 'AccountId')],
  type: ['Balance']
};

const intentions: CreateItemOptions = {
  description: `All the accounts with a desire to stake.`,
  key: 'Staking Intentions',
  params: [],
  type: ['AccountId']
};

const nominating: CreateItemOptions = {
  description: `All nominator -> nominee relationships.`,
  key: 'Staking Nominating',
  params: [param('who', 'AccountId')],
  type: 'AccountId'
};

const nominatorsFor: CreateItemOptions = {
  description: `Nominators for a particular account.`,
  key: 'Staking NominatorsFor',
  params: [param('who', 'AccountId')],
  type: ['AccountId']
};

const currentNominatorsFor: CreateItemOptions = {
  description: `Nominators for a particular account that is in action right now.`,
  key: 'Staking CurrentNominatorsFor',
  params: [param('who', 'AccountId')],
  type: ['AccountId']
};

const currentSessionReward: CreateItemOptions = {
  description: `Maximum reward, per validator, that is provided per acceptable session.`,
  key: 'Staking CurrentSessionReward',
  params: [],
  type: 'Balance'
};

const currentOfflineSlash: CreateItemOptions = {
  description: `Slash, per validator that is taken for the first time they are found to be offline.`,
  key: 'Staking CurrentOfflineSlash',
  params: [],
  type: 'Balance'
};

const nextSessionsPerEra: CreateItemOptions = {
  description: `The next value of sessions per era.`,
  key: 'Staking NextSessionsPerEra',
  params: [],
  type: 'BlockNumber'
};

const lastEraLengthChange: CreateItemOptions = {
  description: `The session index at which the era length last changed.`,
  key: 'Staking LastEraLengthChange',
  params: [],
  type: 'BlockNumber'
};

// @TODO pairOf
const stakeRange: CreateItemOptions = {
  description: `The highest and lowest staked validator slashable balances.`,
  key: 'Staking StakeRange',
  params: [],
  type: ['Balance']
};

const bondage: CreateItemOptions = {
  description: "The block at which the `who`'s funds become entirely liquid.",
  key: 'Staking Bondage',
  params: [param('who', 'AccountId')],
  type: 'BlockNumber'
};

const slashCount: CreateItemOptions = {
  description: `The number of times a given validator has been reported offline. This gets decremented by one each era that passes.`,
  key: 'Staking SlashCount',
  params: [param('who', 'AccountId')],
  type: 'u32'
};

// @TODO
// const forcingNewEra: CreateItemOptions = {
//   description: `We are forcing a new era.`,
//   key: 'Staking ForcingNewEra',
//   params: [],
//   type: ''
// };

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Staking',
    public: {
      validatorCount: createMethod('validatorCount')(validatorCount),
      minimumValidatorCount: createMethod('minimumValidatorCount')(minimumValidatorCount),
      sessionsPerEra: createMethod('sessionsPerEra')(sessionsPerEra),
      sessionReward: createMethod('sessionReward')(sessionReward),
      offlineSlash: createMethod('offlineSlash')(offlineSlash),
      offlineSlashGrace: createMethod('offlineSlashGrace')(offlineSlashGrace),
      bondingDuration: createMethod('bondingDuration')(bondingDuration),
      currentEra: createMethod('currentEra')(currentEra),
      validatorPreferences: createMethod('validatorPreferences')(validatorPreferences),
      intentions: createMethod('intentions')(intentions),
      nominating: createMethod('nominating')(nominating),
      nominatorsFor: createMethod('nominatorsFor')(nominatorsFor),
      currentNominatorsFor: createMethod('currentNominatorsFor')(currentNominatorsFor),
      currentSessionReward: createMethod('currentSessionReward')(currentSessionReward),
      currentOfflineSlash: createMethod('currentOfflineSlash')(currentOfflineSlash),
      nextSessionsPerEra: createMethod('nextSessionsPerEra')(nextSessionsPerEra),
      lastEraLengthChange: createMethod('lastEraLengthChange')(lastEraLengthChange),
      stakeRange: createMethod('stakeRange')(stakeRange),
      bondage: createMethod('bondage')(bondage),
      slashCount: createMethod('slashCount')(slashCount)
      // forcingNewEra: createMethod('forcingNewEra')(forcingNewEra)
    }
  }));
