import { useEffect, useState } from "react";
import { FirebaseUser } from "../core/entities/FirebaseUser.entities";
import { Busqueda } from "../infraestructure/interfaces/canjes-response";
import { getAllUsers } from "./get-all-user";
import { GetPointsById } from "../core/use-cases/points/get-points-by-id";
import { graciasTotalesFetcher } from "../config/adapters/graciasTotalesFetcher";
import { GetCanjesByID } from "../core/use-cases/canjes/get-canjes-by-id";

export const useUserQuery = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<string[]>([])
    const [users, setUsers] = useState<FirebaseUser[]>([]);
    const [userSelected, setUserSelected] = useState<FirebaseUser>();
    const [isSelected, setIsSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [canjes, setCanjes] = useState<Busqueda[]>([]);
    const [points, setPoints] = useState<number>();



    const obtenerTodosLosUsuarios = async () => {
        const users = await getAllUsers();
        setUsers(users);
    }

    useEffect(() => {
        setData(users.map(user => user.displayName));
    }, [users])


    const buscar = async () => {
        setIsLoading(true);
        const filter = users.filter((u) => u.displayName === query);
        setUserSelected(filter[0]);
        const result = await GetPointsById(graciasTotalesFetcher, filter[0].uid);
        setPoints(result.cantidad);
        const resultCanjes = await GetCanjesByID(graciasTotalesFetcher, filter[0].uid);
        setCanjes([...resultCanjes]);
        setIsSelected(true);
        setIsLoading(false);
    }

    return {
        query,
        data,
        users,
        userSelected,
        isSelected,
        isLoading,
        canjes,
        points,
        //methods
        setQuery,
        setData,
        setUsers,
        setUserSelected,
        setIsSelected,
        setIsLoading,
        setCanjes,
        setPoints,
        obtenerTodosLosUsuarios,
        buscar
    }
}