import "jest-extended";

import { bignumify } from "@arkecosystem/core-utils";
import { TransactionTypes } from "../../../../packages/crypto/src/enums";
import { ITransactionData } from "../../../../packages/crypto/src/interfaces";
import { feeManager } from "../../../../packages/crypto/src/managers";

describe("Fee Manager", () => {
    it("should be instantiated", () => {
        expect(feeManager).toBeObject();
    });

    it("should set the fee", () => {
        feeManager.set(TransactionTypes.Transfer, 1);

        expect(feeManager.get(TransactionTypes.Transfer)).toEqual(bignumify(1));
    });

    it("should get transaction fee", () => {
        const transaction = {
            type: TransactionTypes.Transfer,
        } as ITransactionData;

        feeManager.set(TransactionTypes.Transfer, 111);

        expect(feeManager.getForTransaction(transaction)).toEqual(bignumify(111));
    });

    it("should get multisignature fee (keysgroup length + 1)", () => {
        const transaction = {
            type: TransactionTypes.MultiSignature,
            asset: {
                multisignature: {
                    keysgroup: ["1", "2", "3"],
                },
            },
        } as ITransactionData;

        feeManager.set(TransactionTypes.MultiSignature, 1);

        expect(feeManager.getForTransaction(transaction)).toEqual(bignumify(4));
    });
});
