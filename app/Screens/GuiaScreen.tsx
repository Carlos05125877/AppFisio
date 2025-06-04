/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '@/components/Header'; // ajuste o caminho se necessário

const cards = [
  {
    titulo: 'COVID LONGA',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/3jEhYnjh8r.png',
    pergunta: 'Você sabia que mesmo após se curar da COVID-19, alguns sintomas podem continuar?',
    conteudo:
      'A COVID longa, também chamada de síndrome pós-COVID, é uma condição que afeta pessoas que já se recuperaram da infecção inicial, mas continuam apresentando sintomas por semanas ou até meses. Esses sintomas podem surgir mesmo depois de uma forma leve da doença e impactam significativamente a saúde física, mental e emocional. É importante reconhecer esses sinais para buscar orientação médica e iniciar um acompanhamento adequado.',
  },
  {
    titulo: 'SINTOMAS FREQUENTES',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/HcDdYt92UJ.png',
    pergunta: 'Tá sentindo cansaço, falta de ar ou dificuldade pra focar?',
    conteudo:
      'Os sintomas da COVID longa podem variar de pessoa para pessoa, mas os mais comuns incluem: fadiga intensa que não melhora com o descanso, falta de ar, dores musculares e articulares, dores de cabeça frequentes, confusão mental (o famoso "nevoeiro cerebral"), perda de memória, ansiedade, alterações no sono, batimentos cardíacos acelerados e até sintomas gastrointestinais. Esses sinais podem aparecer de forma intermitente e dificultar tarefas do dia a dia.',
  },
  {
    titulo: 'SERÁ QUE TENHO?',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/KdoavX2kSx.png',
    pergunta: 'Como saber se o que eu sinto é mesmo COVID longa?',
    conteudo:
      'Se você teve COVID-19 e, mesmo após mais de quatro semanas da infecção, ainda sente sintomas persistentes como fadiga, dor ou alterações cognitivas, é possível que esteja lidando com a COVID longa. Um diagnóstico oficial deve ser feito por um profissional de saúde, que vai avaliar seu histórico, exames e descartar outras doenças. Fique atento aos sinais e não hesite em buscar ajuda — quanto mais cedo o acompanhamento, melhor a qualidade de vida.',
  },
  {
    titulo: 'NO DIA A DIA',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/O3pFNqWvZq.png',
    pergunta: 'Sua rotina tá difícil depois da COVID?',
    conteudo:
      'Muitas pessoas com COVID longa relatam dificuldades para voltar à rotina anterior, mesmo em tarefas simples como levantar da cama, se concentrar no trabalho ou fazer atividades domésticas. Isso acontece porque o corpo e a mente ainda estão em processo de recuperação. O impacto pode ser tanto físico quanto cognitivo, exigindo pausas frequentes, planejamento de atividades e apoio profissional, como reabilitação e terapia ocupacional.',
  },
  {
    titulo: 'EFEITOS NO CORPO',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/69fGmKBZX5.png',
    pergunta: 'A COVID afeta só o pulmão? Spoiler: não.',
    conteudo:
      'A COVID-19 pode afetar diversos sistemas do corpo, e esses efeitos podem continuar mesmo após a fase aguda da doença. Além do sistema respiratório, ela pode atingir o sistema nervoso, cardiovascular, muscular e digestivo. Isso explica sintomas como confusão mental, taquicardia, fraqueza muscular, intestino desregulado, ansiedade e depressão. Cada organismo responde de um jeito, por isso o acompanhamento deve ser individualizado.',
  },
  {
    titulo: 'QUEM PODE TER?',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/s0YwCwKWk9.png',
    pergunta: 'Tive COVID leve. Tô fora de risco?',
    conteudo:
      'Infelizmente, não. A COVID longa pode afetar qualquer pessoa que teve a infecção, mesmo que tenha sido assintomática ou leve. Estudos mostram que a condição é mais comum em pessoas que foram hospitalizadas, mas também é observada em jovens saudáveis e até crianças. O importante é observar o corpo e buscar orientação se os sintomas aparecerem ou se prolongarem.',
  },
  {
    titulo: 'O QUE FAZER?',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/2GzaE7Fa45.png',
    pergunta: 'Tem como melhorar disso?',
    conteudo:
      'Sim, há tratamento! Embora ainda não exista uma cura específica para a COVID longa, é possível melhorar a qualidade de vida por meio de acompanhamento médico, fisioterapia, reabilitação pulmonar, terapia ocupacional, apoio psicológico e ajustes na rotina. Cada plano de cuidado é personalizado, conforme os sintomas e as limitações de cada pessoa. O mais importante é não ignorar os sinais e buscar apoio.',
  },
  {
    titulo: 'QUANDO PROCURAR AJUDA',
    icone: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/mYyZrABsm2.png',
    pergunta: 'É hora de buscar um médico?',
    conteudo:
      'Se você teve COVID-19 e ainda apresenta sintomas após 4 semanas — especialmente se esses sintomas afetam sua rotina ou bem-estar —, é fundamental procurar um médico.',
  },
];

const GuiaScreen = (): React.JSX.Element => {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <View> 
      <Header title="GUIA PÓS-COVID" />
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.container}>
          <View style={styles.cardsArea}>
            {/* Card 1 - Balão azul à esquerda */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row' }]}> 
                <View style={[styles.cardBalloonLeft, { backgroundColor: '#021C4E' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[0].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[0].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonRight}>
                  <Text style={styles.cardQuestion}>{cards[0].pergunta}</Text>
                  {aberta === 0 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[0].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(0)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 2 - Balão azul à direita */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row-reverse' }]}> 
                <View style={[styles.cardBalloonRight, { backgroundColor: '#032B78' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[1].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[1].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonLeft}>
                  <Text style={styles.cardQuestion}>{cards[1].pergunta}</Text>
                  {aberta === 1 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[1].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(1)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 3 - Balão azul à esquerda */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row' }]}> 
                <View style={[styles.cardBalloonLeft, { backgroundColor: '#023598' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[2].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[2].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonRight}>
                  <Text style={styles.cardQuestion}>{cards[2].pergunta}</Text>
                  {aberta === 2 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[2].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(2)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 4 - Balão azul à direita */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row-reverse' }]}> 
                <View style={[styles.cardBalloonRight, { backgroundColor: '#033FB2' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[3].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[3].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonLeft}>
                  <Text style={styles.cardQuestion}>{cards[3].pergunta}</Text>
                  {aberta === 3 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[3].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(3)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 5 - Balão azul à esquerda */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row' }]}> 
                <View style={[styles.cardBalloonLeft, { backgroundColor: '#0548C8' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[4].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[4].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonRight}>
                  <Text style={styles.cardQuestion}>{cards[4].pergunta}</Text>
                  {aberta === 4 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[4].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(4)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 6 - Balão azul à direita */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row-reverse' }]}> 
                <View style={[styles.cardBalloonRight, { backgroundColor: '#0051EC' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[5].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[5].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonLeft}>
                  <Text style={styles.cardQuestion}>{cards[5].pergunta}</Text>
                  {aberta === 5 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[5].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(5)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 7 - Balão azul à esquerda */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row' }]}> 
                <View style={[styles.cardBalloonLeft, { backgroundColor: '#119EEC' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[6].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[6].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonRight}>
                  <Text style={styles.cardQuestion}>{cards[6].pergunta}</Text>
                  {aberta === 6 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[6].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(6)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* Card 8 - Balão azul à direita */}
            <View style={styles.cardBox}>
              <View style={[styles.cardRow, { flexDirection: 'row-reverse' }]}> 
                <View style={[styles.cardBalloonRight, { backgroundColor: '#3BB9FF' }]}>
                  <View style={styles.cardIconCircle}>
                    <ImageBackground
                      style={styles.cardIcon}
                      source={{ uri: cards[7].icone }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={[styles.cardBalloonTitle, { color: '#fff' }]}>{cards[7].titulo}</Text>
                </View>
                <View style={styles.cardContentBalloonLeft}>
                  <Text style={styles.cardQuestion}>{cards[7].pergunta}</Text>
                  {aberta === 7 ? (
                    <>
                      <View style={styles.cardContentBox}>
                        <Text style={styles.cardContentText}>{cards[7].conteudo}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => setAberta(null)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.cardButtonText}>
                          Fechar conteúdo ▲
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() => setAberta(7)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.cardButtonText}>
                        Ver conteúdo ▼
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24,
  },

  cardsArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: 360,
    marginTop: 8,
    marginBottom: 16,
    gap: 18,
  },
  cardBox: {
    width: '100%',
    marginBottom: 10,
  
  },
  cardRow: {
    width: '100%',
    minHeight: 90,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    padding: 0,
    gap: 0,
  },
  cardBalloonLeft: {
    width: 170,
    height: 88,
    flexShrink: 0,
    backgroundColor: '#012a78',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexDirection: 'row',
    gap: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 3,
    marginRight: -32,
    zIndex: 2,
  },
  cardBalloonRight: {
    width: 170,
    height: 88,
    flexShrink: 0,
    backgroundColor: '#012a78',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 3,
    marginLeft: -32,
    zIndex: 2,
  },
  cardBalloonTitle: {
    color: '#fff',
    width: 90,
    fontFamily: 'Alumni Sans SC',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 0,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginRight: 0,
  },
  cardIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    marginRight: 0,
  },
  cardIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  cardQuestion: {
    paddingLeft: 10,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    width: '90%',
  },
  cardContentBox: {
    marginBottom: 10,
    marginTop: -2,
  },
  cardContentText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#222',
    textAlign: 'left',
    lineHeight: 20,
  },
  cardButton: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardButtonText: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '700',
    color: '#222',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  cardContentBalloonRight: {
    flex: 1,
    backgroundColor: '#f6f7f8',
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    minHeight: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    maxWidth: 260,
    justifyContent: 'center',
    marginLeft: 0,
    zIndex: 1,
  },
  cardContentBalloonLeft: {
    flex: 1,
    backgroundColor: '#f6f7f8',
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    minHeight: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    maxWidth: 260,
    justifyContent: 'center',
    marginRight: 0,
    zIndex: 1,
  },
});

export default GuiaScreen;