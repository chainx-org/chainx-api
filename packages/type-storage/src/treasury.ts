// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

// @TODO Permill
const proposalBond: CreateItemOptions = {
  description: `proposal gets these back. A rejected proposal doesn't.`,
  key: 'Treasury ProposalBond',
  params: [],
  type: 'Balance'
};

const proposalBondMinimum: CreateItemOptions = {
  description: `Minimum amount of funds that should be placed in a deposit for making a proposal.`,
  key: 'Treasury ProposalBondMinimum',
  params: [],
  type: 'Balance'
};

const spendPeriod: CreateItemOptions = {
  description: `Period between successive spends.`,
  key: 'Treasury SpendPeriod',
  params: [],
  type: 'BlockNumber'
};

// @TODO Permill
const burn: CreateItemOptions = {
  description: `Percentage of spare funds (if any) that are burnt per spend period.`,
  key: 'Treasury Burn',
  params: [],
  type: 'Balance'
};

const pot: CreateItemOptions = {
  description: `Total funds available to this module for spending.`,
  key: 'Treasury Pot',
  params: [],
  type: 'Balance'
};

// @TODO ProposalIndex
// const proposalCount: CreateItemOptions = {
//   description: `Number of proposals that have been made.`,
//   key: 'Treasury ProposalCount',
//   params: [],
//   type: 'ProposalIndex'
// };

// const proposals: CreateItemOptions = {
//   description: `Proposals that have been made.`,
//   key: 'Treasury Proposals',
//   params: [
//     param('proposalIndex', 'ProposalIndex')
//   ],
//   type: ['Balance']
// };

// const approvals: CreateItemOptions = {
//   description: `Proposal indices that have been approved but not yet awarded.`,
//   key: 'Treasury Approvals',
//   params: [],
//   type: ['ProposalIndex']
// };

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Timestamp related entries',
    public: {
      proposalBond: createMethod('proposalBond')(proposalBond),
      proposalBondMinimum: createMethod('proposalBondMinimum')(proposalBondMinimum),
      spendPeriod: createMethod('spendPeriod')(spendPeriod),
      burn: createMethod('burn')(burn),
      pot: createMethod('pot')(pot)
      // proposalCount: createMethod('proposalCount')(proposalCount),
      // proposals: createMethod('proposals')(proposals),
      // approvals: createMethod('approvals')(approvals)
    }
  }));
