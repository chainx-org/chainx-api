// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const publicPropCount: CreateItemOptions = {
  description: `The number of (public) proposals that have been made so far.`,
  key: 'Democracy PublicPropCount',
  params: [],
  type: 'PropIndex'
};

const publicProps: CreateItemOptions = {
  description: `The public proposals. Unsorted.`,
  key: 'Democracy PublicProps',
  params: [],
  type: [['PropIndex', 'Proposal', 'AccountId']]
};

const depositOf: CreateItemOptions = {
  description: `Those who have locked a deposit.`,
  key: 'Democracy DepositOf',
  params: [param('undefined', 'PropIndex')],
  type: ['Balance', ['AccountId']]
};

const launchPeriod: CreateItemOptions = {
  description: `How often (in blocks) new public referenda are launched.`,
  key: 'Democracy LaunchPeriod',
  params: [],
  type: 'BlockNumber'
};

const minimumDeposit: CreateItemOptions = {
  description: `The minimum amount to be used as a deposit for a public referendum proposal.`,
  key: 'Democracy MinimumDeposit',
  params: [],
  type: 'Balance'
};

const votingPeriod: CreateItemOptions = {
  description: `How often (in blocks) to check for new votes.`,
  key: 'Democracy VotingPeriod',
  params: [],
  type: 'BlockNumber'
};

const referendumCount: CreateItemOptions = {
  description: `The next free referendum index, aka the number of referendums started so far.`,
  key: 'Democracy ReferendumCount',
  params: [],
  type: 'ReferendumIndex'
};

const nextTally: CreateItemOptions = {
  description: `The next referendum index that should be tallied.`,
  key: 'Democracy NextTally',
  params: [],
  type: 'ReferendumIndex'
};

const referendumInfoOf: CreateItemOptions = {
  description: `Information concerning any given referendum.`,
  key: 'Democracy ReferendumInfoOf',
  params: [param('referendumIndex', 'ReferendumIndex')],
  type: ['BlockNumber', 'Proposal', 'VoteThreshold']
};

const votersFor: CreateItemOptions = {
  description: `Get the voters for the current proposal.`,
  key: 'Democracy VotersFor',
  params: [param('referendumIndex', 'ReferendumIndex')],
  type: ['AccountId']
};

const voteOf: CreateItemOptions = {
  description: 'Get the vote, if Some, of `who`.',
  key: 'Democracy VoteOf',
  params: [],
  type: 'bool'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Democracy',
    public: {
      publicPropCount: createMethod('publicPropCount')(publicPropCount),
      publicProps: createMethod('publicProps')(publicProps),
      depositOf: createMethod('depositOf')(depositOf),
      launchPeriod: createMethod('launchPeriod')(launchPeriod),
      minimumDeposit: createMethod('minimumDeposit')(minimumDeposit),
      votingPeriod: createMethod('votingPeriod')(votingPeriod),
      referendumCount: createMethod('referendumCount')(referendumCount),
      nextTally: createMethod('nextTally')(nextTally),
      referendumInfoOf: createMethod('referendumInfoOf')(referendumInfoOf),
      votersFor: createMethod('votersFor')(votersFor),
      voteOf: createMethod('voteOf')(voteOf)
    }
  }));
