[@breautek/storm](../README.md) / [ExpiredTokenError](../modules/expiredtokenerror.md) / ExpiredTokenError

# Class: ExpiredTokenError

[ExpiredTokenError](../modules/expiredtokenerror.md).ExpiredTokenError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<any\>

  ↳ **ExpiredTokenError**

## Table of contents

### Constructors

- [constructor](expiredtokenerror.expiredtokenerror-1.md#constructor)

### Properties

- [message](expiredtokenerror.expiredtokenerror-1.md#message)
- [name](expiredtokenerror.expiredtokenerror-1.md#name)
- [stack](expiredtokenerror.expiredtokenerror-1.md#stack)
- [prepareStackTrace](expiredtokenerror.expiredtokenerror-1.md#preparestacktrace)
- [stackTraceLimit](expiredtokenerror.expiredtokenerror-1.md#stacktracelimit)

### Methods

- [getCode](expiredtokenerror.expiredtokenerror-1.md#getcode)
- [getErrorResponse](expiredtokenerror.expiredtokenerror-1.md#geterrorresponse)
- [getExitCode](expiredtokenerror.expiredtokenerror-1.md#getexitcode)
- [getHTTPCode](expiredtokenerror.expiredtokenerror-1.md#gethttpcode)
- [getMessage](expiredtokenerror.expiredtokenerror-1.md#getmessage)
- [getPrivateDetails](expiredtokenerror.expiredtokenerror-1.md#getprivatedetails)
- [getPublicDetails](expiredtokenerror.expiredtokenerror-1.md#getpublicdetails)
- [captureStackTrace](expiredtokenerror.expiredtokenerror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new ExpiredTokenError**(`details?`: *any*): [*ExpiredTokenError*](expiredtokenerror.expiredtokenerror-1.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `details?` | *any* |

**Returns:** [*ExpiredTokenError*](expiredtokenerror.expiredtokenerror-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/ExpiredTokenError.ts:21](https://github.com/breautek/storm/blob/2614a1c/src/ExpiredTokenError.ts#L21)

## Properties

### message

• **message**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[message](stormerror.stormerror-1.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[name](stormerror.stormerror-1.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[stack](stormerror.stormerror-1.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: [StormError](stormerror.stormerror-1.md).[prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: [StormError](stormerror.stormerror-1.md).[stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [*ErrorCode*](../enums/errorcode.errorcode-1.md)

**Returns:** [*ErrorCode*](../enums/errorcode.errorcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/ExpiredTokenError.ts:31](https://github.com/breautek/storm/blob/2614a1c/src/ExpiredTokenError.ts#L31)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/ExpiredTokenError.ts:35](https://github.com/breautek/storm/blob/2614a1c/src/ExpiredTokenError.ts#L35)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/ExpiredTokenError.ts:27](https://github.com/breautek/storm/blob/2614a1c/src/ExpiredTokenError.ts#L27)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

| Name | Type |
| :------ | :------ |
| `targetObject` | *object* |
| `constructorOpt?` | Function |

**Returns:** *void*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: node_modules/@types/node/globals.d.ts:4
