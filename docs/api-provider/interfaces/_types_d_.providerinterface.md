

# Hierarchy

**ProviderInterface**

# Implemented by

* [HttpProvider](../classes/_http_index_.httpprovider.md)

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

<<<<<<< HEAD
*Defined in [types.d.ts:45](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/types.d.ts#L45)*
=======
*Defined in [types.d.ts:45](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/types.d.ts#L45)*
>>>>>>> upstream/master

**Returns:** `boolean`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `void`

<<<<<<< HEAD
*Defined in [types.d.ts:46](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/types.d.ts#L46)*
=======
*Defined in [types.d.ts:46](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/types.d.ts#L46)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

<<<<<<< HEAD
*Defined in [types.d.ts:47](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/types.d.ts#L47)*
=======
*Defined in [types.d.ts:47](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/types.d.ts#L47)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

<<<<<<< HEAD
*Defined in [types.d.ts:48](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/types.d.ts#L48)*
=======
*Defined in [types.d.ts:48](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/types.d.ts#L48)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

<<<<<<< HEAD
*Defined in [types.d.ts:49](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/types.d.ts#L49)*
=======
*Defined in [types.d.ts:49](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/types.d.ts#L49)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

