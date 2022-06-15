import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import estrela from "../../assets/estrela.png"
import estrelaCinza from "../../assets/estrelaCinza.png";

export default function Estrelas({

    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,

}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    const estilos = estilosFuncao(grande);

    const getImagem = (index) => {
        if (index < quantidade) {
            return estrela;
        }
        return estrelaCinza;
    }

    const RenderEstrelas = () => {
        const listEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listEstrelas.push(
                <TouchableOpacity key={i} onPress={() => setQuantidade(i + 1)} disabled={!editavel}>
                    <Image source={getImagem(i)} style={estilos.estrela} />
                </TouchableOpacity>
            )
        };
        return listEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({

    estrelas: {
        flexDirection: "row"
    },
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }

});

