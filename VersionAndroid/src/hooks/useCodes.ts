import { useEffect, useState } from "react";
import { graciasTotalesFetcher } from "../config/adapters/graciasTotalesFetcher";
import { GetAllCodes } from "../core/use-cases/codes/get-all-codes";
import { codes } from '../core/entities/codes.entities';

export const UseCodes = () => {
    const [codes, setCodes] = useState<codes[]>([])
    useEffect(() => {
        getCodes();

    }, [])


    const getCodes = async () => {
        const codesPromise = await GetAllCodes(graciasTotalesFetcher);
        setCodes(codesPromise);
    }

    return {
        codes,

        //methods

        getCodes
    }
}